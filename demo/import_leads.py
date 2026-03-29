#!/usr/bin/env python3
"""
Import leads from CSV into RakriAI Dashboard via API.

Usage:
  python3 import_leads.py --csv leads.csv
  python3 import_leads.py --csv leads.csv --api http://localhost:3000
"""

import argparse
import os
import requests


def import_csv(csv_path, api_base, password):
    """Read CSV file and POST to /api/leads/import."""

    if not os.path.exists(csv_path):
        print(f"❌ File not found: {csv_path}")
        return

    with open(csv_path, "r", encoding="utf-8") as f:
        csv_text = f.read()

    row_count = len(csv_text.strip().split("\n")) - 1
    print(f"\n📋 Read {row_count} rows from {csv_path}")

    # First authenticate
    print(f"🔐 Authenticating with {api_base}...")
    session = requests.Session()
    auth_res = session.post(
        f"{api_base}/api/auth",
        json={"password": password},
    )

    if not auth_res.ok:
        print(f"❌ Authentication failed: {auth_res.text}")
        return

    # Copy cookies from auth response
    print("📤 Importing leads...")
    import_res = session.post(
        f"{api_base}/api/leads/import",
        json={"csv": csv_text},
    )

    if import_res.ok:
        data = import_res.json()
        print(f"\n{'='*50}")
        print(f"✅ Import Complete")
        print(f"{'='*50}")
        print(f"   Total rows:  {data.get('total', 0)}")
        print(f"   Imported:    {data.get('imported', 0)}")
        print(f"   Skipped:     {data.get('skipped', 0)}")
        if data.get("errors"):
            print(f"   Errors:")
            for err in data["errors"][:5]:
                print(f"     - {err}")
        print(f"{'='*50}\n")
    else:
        print(f"❌ Import failed: {import_res.text}")


def main():
    parser = argparse.ArgumentParser(description="Import leads CSV into RakriAI Dashboard")
    parser.add_argument("--csv", type=str, required=True, help="Path to CSV file")
    parser.add_argument("--api", type=str, default="http://localhost:3000", help="API base URL")
    parser.add_argument("--password", type=str, default=None, help="Dashboard password (or set DASHBOARD_PASSWORD env)")

    args = parser.parse_args()

    password = args.password or os.environ.get("DASHBOARD_PASSWORD", "rakriai2026")

    import_csv(args.csv, args.api, password)


if __name__ == "__main__":
    main()
