import { EmailTemplate } from "@/app/components/email-template";
import { AdminEmailTemplate } from "@/app/components/admin-email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Send email to the user
    const { data: userData, error: userError } = await resend.emails.send({
      from: "John Prokopos <noreply@johnprokopos.com>",
      to: `${email}`,
      subject: "Thank you for reaching out!",
      react: EmailTemplate({ name }),
    });

    if (userError) {
      return new Response(JSON.stringify({ error: userError }), {
        status: 500,
      });
    }

    // Send email to myself
    const { data: AdminData, error: AdminError } = await resend.emails.send({
      from: "John Prokopos <noreply@johnprokopos.com>",
      to: "giannisprokopos@gmail.com",
      subject: "New Message on the portfolio",
      react: AdminEmailTemplate({ name, message, email }),
    });

    if (AdminError) {
      return new Response(JSON.stringify({ error: AdminError }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ userData, AdminData }));
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
