import { Resend } from "resend";

export const sendEmail = async (
  to: string,
  subject: string,
  template: React.ReactNode
) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  if (!process.env.RESEND_API_KEY) {
    console.error("❌ RESEND_API_KEY is missing");
    throw new Error("Missing RESEND_API_KEY");
  }

  if (!to || !subject || !template) {
    console.error("❌ Missing email parameters:", { to, subject, template });
    throw new Error("Missing email parameters");
  }

  const text = `Thank you for your order!\n\nYou can see the full order in your account.`;

  console.log("📧 Sending email to:", to);
  console.log("📨 Subject:", subject);

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to,
    subject,
    text,
    react: template,
  });

  if (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }

  console.log("✅ Email sent successfully:", data?.id);
  return data;
};
