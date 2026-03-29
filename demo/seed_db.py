#!/usr/bin/env python3
"""
Seed the database with existing leads.csv files for testing.
Uses the import_leads.py script under the hood.

Usage:
  python3 seed_db.py
  python3 seed_db.py --api http://localhost:3000
"""

import argparse
import os
import subprocess
import sys


def main():
    parser = argparse.ArgumentParser(description="Seed RakriAI database with existing CSV files")
    parser.add_argument("--api", type=str, default="http://localhost:3000", help="API base URL")
    parser.add_argument("--password", type=str, default=None, help="Dashboard password")
    args = parser.parse_args()

    password = args.password or os.environ.get("DASHBOARD_PASSWORD", "rakriai2026")
    script_dir = os.path.dirname(os.path.abspath(__file__))
    import_script = os.path.join(script_dir, "import_leads.py")

    # Find all CSV files in demo/
    csv_files = sorted([
        f for f in os.listdir(script_dir)
        if f.endswith(".csv") and os.path.isfile(os.path.join(script_dir, f))
    ])

    if not csv_files:
        print("❌ No CSV files found in demo/ directory")
        return

    print(f"\n🌱 Seeding database from {len(csv_files)} CSV files...\n")

    for csv_file in csv_files:
        csv_path = os.path.join(script_dir, csv_file)
        print(f"{'─'*50}")
        print(f"📂 Importing: {csv_file}")
        subprocess.run([
            sys.executable, import_script,
            "--csv", csv_path,
            "--api", args.api,
            "--password", password,
        ])

    print(f"\n✅ Seed complete! Check your dashboard at {args.api}/dashboard\n")


if __name__ == "__main__":
    main()
