import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactFormRequest = await req.json();

    console.log("Received contact form submission:", { name, email, message: message.substring(0, 50) + "..." });

    // Validate inputs
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to you (Santosh)
    const notificationEmail = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["Queries.santosh@gmail.com"],
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #1a1a1a; color: #ffffff;">
          <h1 style="color: #f5c542; border-bottom: 2px solid #f5c542; padding-bottom: 10px;">New Client Inquiry</h1>
          
          <div style="background-color: #2a2a2a; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #f5c542;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #f5c542;">Email:</strong> <a href="mailto:${email}" style="color: #22c55e;">${email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #f5c542;">Message:</strong></p>
            <p style="background-color: #1a1a1a; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #333;">
            <p style="color: #888; font-size: 12px;">Received from your portfolio website</p>
          </div>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
