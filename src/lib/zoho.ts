import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_SMTP_HOST || "smtp.zoho.com",
  port: parseInt(process.env.ZOHO_SMTP_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

export async function sendEmail({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    await transporter.sendMail({
      from: `"Rakriai" <${process.env.ZOHO_EMAIL}>`,
      to,
      subject,
      text: body,
      html: body.replace(/\n/g, "<br>"),
    });
    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Email send failed:", message);
    return { success: false, error: message };
  }
}
