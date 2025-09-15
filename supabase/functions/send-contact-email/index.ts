import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const smtpClient = new SMTPClient({
  connection: {
    hostname: "smtp.hostinger.com",
    port: 465,
    tls: true,
    auth: {
      username: Deno.env.get("EMAIL_USER") || "",
      password: Deno.env.get("EMAIL_PASS") || "",
    },
  },
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SendEmailRequest {
  nome: string;
  email: string;
  telefone: string;
  destinatario?: string;
}

serve(async (req: Request) => {
  console.log("🚀 Função send-contact-email iniciada");

  if (req.method === "OPTIONS") {
    console.log("📋 Requisição OPTIONS (CORS preflight)");
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    console.log("❌ Método não permitido:", req.method);
    return new Response(JSON.stringify({ error: "Método não permitido" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const { nome, email, telefone, destinatario }: SendEmailRequest = await req.json();
    console.log("📨 Dados recebidos:", { nome, email, telefone, destinatario });

    if (!nome || !email || !telefone) {
      console.log("⚠️ Campos obrigatórios faltando");
      return new Response(
        JSON.stringify({ error: "Todos os campos são obrigatórios." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const toAddress = destinatario || "luiz@gruposcalco.com.br";
    console.log("📧 Email será enviado para:", toAddress);

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #1e3a8a; margin-bottom: 20px; text-align: center;">
            🚀 Nova Solicitação do Método GAP
          </h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Dados do Cliente:</h3>
            <p style="margin: 8px 0;"><strong>Nome:</strong> ${nome}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1e3a8a;">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Telefone:</strong> <a href="tel:${telefone}" style="color: #1e3a8a;">${telefone}</a></p>
          </div>
          
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0; color: #92400e; text-align: center;">
              <strong>💡 Cliente interessado no Método GAP para melhorar a performance da equipe!</strong>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 25px;">
            <a href="mailto:${email}" style="background-color: #1e3a8a; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Responder Cliente
            </a>
          </div>
        </div>
      </div>
    `;

    try {
      console.log("📤 Enviando email via SMTP Hostinger...");
      
      await smtpClient.send({
        from: `Grupo Scalco - Site <${Deno.env.get("EMAIL_USER")}>`,
        to: toAddress,
        subject: `🚀 Nova solicitação do Método GAP - ${nome}`,
        html,
        replyTo: email,
      });

      console.log("✅ Email enviado com sucesso via SMTP Hostinger");
      
      return new Response(JSON.stringify({ 
        message: "✅ Solicitação enviada com sucesso! Entraremos em contato em breve." 
      }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });

    } catch (smtpError) {
      console.error("❌ Erro ao enviar e-mail (SMTP):", smtpError);
      return new Response(
        JSON.stringify({ error: "Falha ao enviar o e-mail. Tente novamente em alguns minutos." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

  } catch (err: any) {
    console.error("💥 Erro na função send-contact-email:", err);
    return new Response(
      JSON.stringify({ error: "Erro interno ao processar a solicitação." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});