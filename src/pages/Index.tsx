import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Target, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, BarChart3, Zap, Shield, Brain, Eye, MessageCircle, AlertTriangle, Clock, UserX, Wrench } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return <div className="min-h-screen bg-brand-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-brand-dark-blue text-brand-white overflow-hidden">
        <HeroBackground />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img src="/lovable-uploads/1fb3e78a-ba18-46de-9a0b-ae1ca0b9a55b.png" alt="Grupo Scalco Logo" className="max-h-20 w-auto" />
          </div>
          
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-brand-yellow text-brand-dark-blue hover:bg-brand-yellow/90">
              <Award className="w-4 h-4 mr-2" />
              Método Comprovado por Resultados
            </Badge>
          </div>

          {/* Main Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transforme Postos de Combustíveis em 
              <span className="text-brand-yellow block mt-2">Máquinas de Vendas</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-brand-white/90 max-w-3xl mx-auto leading-relaxed">
              Consultoria especializada + plataforma tecnológica que aumenta faturamento e reduz custos
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-brand-yellow text-brand-dark-blue hover:bg-brand-yellow/90 text-lg px-8 py-4 h-auto font-semibold"
                onClick={() => window.open('https://wa.me/5551999712999?text=Olá! Quero conhecer o Método GAP e como vocês podem ajudar meu posto de combustível a aumentar o faturamento.', '_blank')}
              >
                Conheça o Método GAP
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-dark-blue text-lg px-8 py-4 h-auto"
                onClick={() => window.open('https://wa.me/5551999712999?text=Olá! Gostaria de agendar uma demonstração da plataforma tecnológica do Método GAP.', '_blank')}
              >
                Agendar Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 section-title">
            O Método GAP: A Chave para o Sucesso do Seu Posto
          </h2>
          <p className="text-lg md:text-xl mb-12 text-gray-700 max-w-3xl mx-auto">
            Descubra como nossa abordagem integrada de Gestão, Aumento de Lucratividade e
            Performance pode revolucionar seu negócio.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-start gap-8">
            {/* Pillar 1: Gestão Estratégica */}
            <div className="flex-1 text-left">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 mr-2 text-brand-dark-blue" />
                <h3 className="text-xl font-semibold">Gestão Estratégica</h3>
              </div>
              <p className="text-gray-600">
                Implemente uma gestão eficiente com análise de dados, controle financeiro e
                tomada de decisões assertivas.
              </p>
            </div>

            {/* Pillar 2: Aumento de Lucratividade */}
            <div className="flex-1 text-left">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 mr-2 text-brand-dark-blue" />
                <h3 className="text-xl font-semibold">Aumento de Lucratividade</h3>
              </div>
              <p className="text-gray-600">
                Maximize seus lucros com estratégias de marketing, fidelização de clientes e
                otimização de vendas.
              </p>
            </div>

            {/* Pillar 3: Performance Contínua */}
            <div className="flex-1 text-left">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-6 h-6 mr-2 text-brand-dark-blue" />
                <h3 className="text-xl font-semibold">Performance Contínua</h3>
              </div>
              <p className="text-gray-600">
                Monitore resultados, ajuste estratégias e impulsione o crescimento contínuo do
                seu posto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="bg-brand-light-blue py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-dark-blue section-title">
            Nossa Plataforma Tecnológica: O Futuro da Gestão de Postos
          </h2>
          <p className="text-lg md:text-xl mb-12 text-brand-text max-w-3xl mx-auto">
            Transforme a gestão do seu posto com nossa plataforma intuitiva e poderosa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-brand-white shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-brand-dark-blue">
                    Gestão Financeira Integrada
                  </h3>
                  <Shield className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <p className="text-gray-600">
                  Controle total das finanças do seu posto em um só lugar.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-brand-white shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-brand-dark-blue">
                    Análise de Dados em Tempo Real
                  </h3>
                  <Brain className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <p className="text-gray-600">
                  Tome decisões estratégicas com base em dados precisos e atualizados.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-brand-white shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-brand-dark-blue">
                    Monitoramento de Desempenho
                  </h3>
                  <Eye className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <p className="text-gray-600">
                  Acompanhe o desempenho do seu posto em tempo real e identifique oportunidades
                  de melhoria.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="bg-brand-white shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-brand-dark-blue">
                    Comunicação Integrada com Clientes
                  </h3>
                  <MessageCircle className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <p className="text-gray-600">
                  Mantenha seus clientes informados e engajados com promoções e novidades.
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="bg-brand-white shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-brand-dark-blue">
                    Alertas e Notificações Inteligentes
                  </h3>
                  <AlertTriangle className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <p className="text-gray-600">
                  Receba alertas sobre problemas e oportunidades em tempo real.
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="bg-brand-white shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-brand-dark-blue">
                    Agendamento e Gestão de Manutenção
                  </h3>
                  <Clock className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <p className="text-gray-600">
                  Gerencie a manutenção do seu posto de forma eficiente e organizada.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 section-title">
            Resultados Comprovados: A História de Sucesso dos Nossos Clientes
          </h2>
          <p className="text-lg md:text-xl mb-12 text-gray-700 max-w-3xl mx-auto">
            Veja como o Método GAP transformou postos de combustíveis em verdadeiras máquinas
            de vendas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Result 1 */}
            <Card className="bg-brand-white shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-brand-dark-blue">
                    Aumento de 30% no Faturamento
                  </h3>
                  <TrendingUp className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <p className="text-gray-600">
                  Um posto de combustível em São Paulo aumentou seu faturamento em 30% após
                  implementar o Método GAP.
                </p>
              </CardContent>
            </Card>

            {/* Result 2 */}
            <Card className="bg-brand-white shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-brand-dark-blue">
                    Redução de 20% nos Custos
                  </h3>
                  <UserX className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <p className="text-gray-600">
                  Um posto de combustível em Minas Gerais reduziu seus custos em 20% após
                  implementar o Método GAP.
                </p>
              </CardContent>
            </Card>

            {/* Result 3 */}
            <Card className="bg-brand-white shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-brand-dark-blue">
                    Aumento de 40% na Fidelização de Clientes
                  </h3>
                  <Star className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <p className="text-gray-600">
                  Um posto de combustível no Rio de Janeiro aumentou sua fidelização de clientes
                  em 40% após implementar o Método GAP.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultants Section */}
      <section className="py-20 bg-brand-light-blue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-dark-blue section-title">
            Nossos Consultores Especializados: A Força por Trás do Seu Sucesso
          </h2>
          <p className="text-lg md:text-xl mb-12 text-brand-text max-w-3xl mx-auto">
            Conheça a equipe de especialistas que vai transformar seu posto de combustível em
            uma máquina de vendas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Consultant 1 */}
            <Card className="bg-brand-white shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-brand-dark-blue">
                    João Silva
                  </h3>
                  <Users className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <p className="text-gray-600">
                  Especialista em gestão estratégica de postos de combustíveis.
                </p>
              </CardContent>
            </Card>

            {/* Consultant 2 */}
            <Card className="bg-brand-white shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-brand-dark-blue">
                    Maria Oliveira
                  </h3>
                  <Wrench className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <p className="text-gray-600">
                  Especialista em otimização de processos e redução de custos.
                </p>
              </CardContent>
            </Card>

            {/* Consultant 3 */}
            <Card className="bg-brand-white shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-brand-dark-blue">
                    Carlos Souza
                  </h3>
                  <Target className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <p className="text-gray-600">
                  Especialista em marketing e fidelização de clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-brand-dark-blue text-brand-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 section-title">
            Pronto para Transformar Seu Posto de Combustível?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-brand-white/90 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como o Método GAP pode revolucionar seu
            negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-yellow text-brand-dark-blue hover:bg-brand-yellow/90 text-lg px-8 py-4 h-auto font-semibold"
              onClick={() => window.open('https://wa.me/5551999712999?text=Olá! Quero conhecer o Método GAP e como vocês podem ajudar meu posto de combustível a aumentar o faturamento.', '_blank')}
            >
              Conheça o Método GAP
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-dark-blue text-lg px-8 py-4 h-auto"
              onClick={() => window.open('https://wa.me/5551999712999?text=Olá! Gostaria de agendar uma demonstração da plataforma tecnológica do Método GAP.', '_blank')}
            >
              Agendar Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 bg-brand-white border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">
            © 2024 Grupo Scalco. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>;
};

export default Index;
