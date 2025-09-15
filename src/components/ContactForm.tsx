import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Send, CheckCircle } from "lucide-react";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().email("Email inválido").max(100, "Email muito longo"),
  telefone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos").max(20, "Telefone muito longo"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setIsSuccess(false);

    try {
      console.log("📤 Enviando dados do formulário:", data);

      // Chamada para a Edge Function
      const { data: result, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          nome: data.nome,
          email: data.email,
          telefone: data.telefone,
        },
      });

      if (error) {
        console.error("❌ Erro da Edge Function:", error);
        throw error;
      }

      console.log("✅ Resposta da Edge Function:", result);

      // Sucesso
      setIsSuccess(true);
      toast({
        title: "✅ Solicitação enviada!",
        description: "Recebemos sua solicitação. Entraremos em contato em breve!",
        variant: "default",
      });

      // Reset form after success
      form.reset();

      // GTM tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form_scalco',
          value: 1
        });
      }

    } catch (error: any) {
      console.error("💥 Erro ao enviar formulário:", error);
      
      toast({
        title: "❌ Erro ao enviar",
        description: error?.message || "Ocorreu um erro. Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className={`w-full max-w-md mx-auto ${className}`}>
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <div>
              <h3 className="text-xl font-semibold text-brand-dark-blue mb-2">
                ✅ Solicitação Enviada!
              </h3>
              <p className="text-muted-foreground">
                Recebemos sua solicitação e entraremos em contato em breve para agendar seu diagnóstico gratuito.
              </p>
            </div>
            <Button 
              onClick={() => {
                setIsSuccess(false);
                form.reset();
              }}
              variant="outline"
              className="mt-4"
            >
              Enviar Nova Solicitação
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`w-full max-w-md mx-auto ${className}`}>
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl sm:text-2xl font-bold text-brand-dark-blue">
          🚀 Solicite seu Diagnóstico Gratuito
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Descubra como o Método GAP pode transformar a performance do seu time
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome completo *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Digite seu nome completo" 
                      {...field} 
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="seu@email.com" 
                      {...field} 
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="telefone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone/WhatsApp *</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="(11) 99999-9999" 
                      {...field} 
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-brand-yellow to-yellow-400 text-brand-dark-blue hover:from-brand-yellow hover:to-yellow-300 font-bold py-3 text-base"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Solicitar Diagnóstico Gratuito
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-3">
              * Campos obrigatórios. Seus dados estão seguros conosco.
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};