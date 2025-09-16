import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Target, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin, BarChart3, Zap, Shield, Brain, Eye, MessageCircle, AlertTriangle, Clock, UserX, Wrench } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import ScalcoLogo from "@/components/ScalcoLogo";
import { ContactForm } from "@/components/ContactForm";
import { SalaryChartWithSuspense, EvolutionChartWithSuspense, TestimonialCarouselWithSuspense, ClientLogosWithSuspense } from "@/components/LazyComponents";
import { OptimizedImage } from "@/components/OptimizedImage";
import { PerformanceMonitor, addResourceHints } from "@/components/PerformanceMonitor";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    addResourceHints();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleContactFormClick = (buttonText?: string, section?: string) => {
    // Send GTM event for form navigation
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'scroll_to_contact_form',
        button_text: buttonText || 'Contact Form Click',
        page_section: section || 'unknown',
        action: 'scroll_to_form'
      });
    }
    
    // Scroll to contact form
    scrollToSection('contact-form');
  };

  const problemSection = useStaggeredAnimation(3, 150);
  const gapSection = useScrollAnimation();
  const pilaresSection = useStaggeredAnimation(3, 200);
  const tecnologiaSection = useStaggeredAnimation(3, 150);
  const consultoriaSection = useStaggeredAnimation(3, 100);
  const numerosSection = useStaggeredAnimation(2, 300);
  const faqSection = useStaggeredAnimation(3, 200);
  const ctaSection = useScrollAnimation();

  return (
    <div className="min-h-screen bg-brand-white overflow-x-hidden">
      {/* Hero Section - Centered Content Only */}
      <section className="relative py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 flex items-center overflow-hidden min-h-[85vh] sm:min-h-[60vh] bg-cover bg-center bg-no-repeat bg-[url('/lovable-uploads/e22fa9ac-3996-468f-a64d-b277709c5e85.png')] md:bg-[url('/lovable-uploads/7fa7d253-07df-4933-bc10-687cae92d2d4.png')]" style={{
      backgroundPositionX: 'center',
      backgroundPositionY: 'center'
    }}>
        {/* Subtle blur overlay */}
        <div className="absolute inset-0 backdrop-blur-[1px] md:backdrop-blur-[2px] bg-brand-dark-blue/5 md:bg-brand-dark-blue/2"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              <h1 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-white mb-4 sm:mb-6 leading-tight px-2">
                Você paga <span className="bg-gradient-to-r from-brand-yellow to-yellow-400 bg-clip-text text-transparent">salários</span>.
                <br />
                Nós garantimos que sua gestão de pessoas
                <br />
                <span className="bg-gradient-to-r from-brand-yellow to-yellow-400 bg-clip-text text-transparent">gera resultado</span>.
              </h1>
              
               <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-white/90 mb-6 sm:mb-8 leading-relaxed text-zinc-200 px-4">
                Nós do Grupo Scalco te ajudamos com este cenário, através de uma consultoria em gestão de pessoas que une estratégia + acompanhamento para times que realmente entregam.
               </p>
              
              <div className="px-2 sm:px-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-brand-yellow to-yellow-400 text-brand-dark-blue px-3 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-base md:text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-yellow hover:to-yellow-300 hover:text-brand-dark-blue w-full sm:w-auto leading-tight cursor-pointer"
                  onClick={() => handleContactFormClick("Falar agora com um especialista", "hero")}
                >
                  Falar agora com um especialista
                  <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-5 sm:h-5 flex-shrink-0" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Full-width banner at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-8 bg-gradient-to-t from-brand-white to-transparent"></div>
      </section>

      {/* Logo Section - After Hero */}
      <section className="py-2 sm:py-3 md:py-2 bg-brand-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <ScalcoLogo topSpacing="" bottomSpacing="" mobileHeight="max-h-12" tabletHeight="sm:max-h-16" desktopHeight="md:max-h-16" largeDesktopHeight="lg:max-h-20" extraLargeHeight="xl:max-h-24" ultraWideHeight="2xl:max-h-32" />
          </div>
        </div>
      </section>

      {/* Problem Section - Você cumpre sua parte */}
      <section className="py-8 sm:py-10 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark-blue mb-4 sm:mb-6 px-4">
                O problema que trava sua empresa
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-8 sm:mb-12">
              <div ref={problemSection.ref} className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                <Card className={`p-4 sm:p-6 hover:shadow-xl transition-all duration-300 ${problemSection.visibleItems[0] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                  <CardContent className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-brand-dark-blue mb-1 sm:mb-2">Fora do Prazo</h3>
                      <p className="text-sm sm:text-base text-gray-600">Tarefas entregues fora do prazo constantemente</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className={`p-4 sm:p-6 hover:shadow-xl transition-all duration-300 ${problemSection.visibleItems[1] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                  <CardContent className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <UserX className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-brand-dark-blue mb-1 sm:mb-2">Sem Direcionamento</h3>
                      <p className="text-sm sm:text-base text-gray-600">Ninguém sabe quem faz o quê</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className={`p-4 sm:p-6 hover:shadow-xl transition-all duration-300 ${problemSection.visibleItems[2] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                  <CardContent className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-brand-dark-blue mb-1 sm:mb-2">Qualidade Baixa</h3>
                      <p className="text-sm sm:text-base text-gray-600">Trabalhos feitos de qualquer jeito</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex justify-center order-1 lg:order-2 px-2 sm:px-4">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                  <SalaryChartWithSuspense />
                </div>
              </div>
            </div>

            <div className="text-center px-4">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 font-semibold">
                Essa é a realidade de muitas empresas com várias unidades e equipes descentralizadas.
              </p>
              
              <Button 
                size="lg" 
                className="bg-brand-dark-blue text-brand-white hover:bg-brand-dark-blue/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto cursor-pointer"
                onClick={() => handleContactFormClick("Agende um diagnóstico gratuito", "problema")}
              >
                Agende um diagnóstico gratuito
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O que é o Método GAP e como funciona */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-brand-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div ref={gapSection.ref} className={`text-center mb-8 sm:mb-12 ${gapSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark-blue mb-4 sm:mb-6 px-4">
                O que é o Método GAP e como funciona
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
              <div className={`text-center px-4 ${gapSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                  O Método GAP é uma consultoria em gestão de pessoas focada em resultados reais.
                  <br />
                  Ele atua em 3 pilares simples e diretos:
                </p>
              </div>

              <div ref={pilaresSection.ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <Card className={`p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 ${pilaresSection.visibleItems[0] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                  <CardContent className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-red-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-dark-blue mb-3 sm:mb-4">Desconforto positivo</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      → Quem não entrega perde pontos.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className={`p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 ${pilaresSection.visibleItems[1] ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
                  <CardContent className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-dark-blue mb-3 sm:mb-4">Reconhecimento</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      → Quem entrega ganha visibilidade e valor.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className={`p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 ${pilaresSection.visibleItems[2] ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                  <CardContent className="text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-dark-blue mb-3 sm:mb-4">Gestão ativa e engajamento</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      → Consultores acompanham de perto, criam clareza nas metas e aumentam o comprometimento da equipe.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className={`text-center px-4 ${gapSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="bg-gradient-to-r from-brand-yellow to-yellow-400 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
                  <p className="text-base sm:text-lg font-bold text-brand-dark-blue leading-relaxed">
                    <strong>Resultado:</strong> você recupera o controle da operação, melhora o engajamento dos colaboradores e aumenta a performance — rápido e sem enrolação.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center px-4">
              <Button 
                size="lg" 
                className="bg-brand-dark-blue text-brand-white hover:bg-brand-dark-blue/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto cursor-pointer"
                onClick={() => handleContactFormClick("Quero aplicar no meu time", "gap-pilares")}
              >
                Quero aplicar no meu time
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Números que comprovam */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark-blue mb-4 sm:mb-6 px-4">
              Você não precisa acreditar na gente. Acredite nos números.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-4">
              Resultados reais de empresas que aplicaram o Método GAP
            </p>
          </div>
          
          <div ref={numerosSection.ref} className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-8 sm:mb-12">
            {/* Metrics Cards - Stacked vertically */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:w-1/2">
              <Card className={`p-6 sm:p-8 bg-gradient-to-br from-green-500 to-green-600 text-white ${numerosSection.visibleItems[0] ? 'animate-fade-in-scale' : 'opacity-0'}`}>
                <CardContent className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">+96%</div>
                  <p className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">de tarefas entregues corretamente</p>
                  <p className="text-xs sm:text-sm opacity-90">Aumento comprovado em qualidade</p>
                </CardContent>
              </Card>
              
              <Card className={`p-6 sm:p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white ${numerosSection.visibleItems[1] ? 'animate-fade-in-scale' : 'opacity-0'}`}>
                <CardContent className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">+29,47%</div>
                  <p className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">de aumento na performance geral</p>
                  <p className="text-xs sm:text-sm opacity-90">Em 6 meses</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Evolution Chart */}
            <div className="lg:w-1/2">
              <EvolutionChartWithSuspense />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-dark-blue mb-6 sm:mb-8 text-center px-4">O que nossos clientes dizem:</h3>
            
            <TestimonialCarouselWithSuspense />
          </div>

          <div className="text-center px-4">
            <Button 
              size="lg" 
              className="bg-brand-dark-blue text-brand-white hover:bg-brand-dark-blue/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto cursor-pointer"
              onClick={() => handleContactFormClick("Quero esses resultados", "numeros")}
            >
              Quero esses resultados
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quem usa o GAP - SEÇÃO SIMPLIFICADA */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-brand-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark-blue mb-4 sm:mb-6 px-4">
              Quem usa o GAP
            </h2>
            
            {/* Frases destacadas */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 px-4">
              <div className="bg-green-100 border-l-4 border-green-500 p-4 sm:p-6 rounded-r-lg">
                <p className="text-sm sm:text-base md:text-lg font-semibold text-green-800">
                  Mercados e supermercados, postos de combustíveis, lojas de conveniência.
                </p>
              </div>
              
              <div className="bg-brand-light-blue/10 border-l-4 border-brand-light-blue p-4 sm:p-6 rounded-r-lg">
                <p className="text-sm sm:text-base md:text-lg font-semibold text-brand-dark-blue">
                  Empresas com várias unidades já usam o GAP para escalar desempenho
                </p>
              </div>
            </div>
          </div>
          
          {/* Carrossel de logos com visibilidade garantida */}
          <div className="w-full client-logos-mobile">
            <ClientLogosWithSuspense />
          </div>
        </div>
      </section>

      {/* FAQ - Mas será que funciona aqui? */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark-blue mb-8 sm:mb-12 text-center px-4">
              "Mas será que funciona aqui?"
            </h2>
            
            <div ref={faqSection.ref} className="grid gap-4 sm:gap-6 lg:gap-8">
              <Card className={`p-4 sm:p-6 lg:p-8 ${faqSection.visibleItems[0] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <CardContent>
                  <h3 className="text-lg sm:text-xl font-bold text-red-600 mb-3 sm:mb-4">"Aqui o pessoal é resistente..."</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    <strong>→ O GAP foi criado para ambientes tradicionais e difíceis.</strong> Nossos consultores têm experiência em quebrar resistências e engajar equipes desmotivadas.
                  </p>
                </CardContent>
              </Card>
              
              <Card className={`p-4 sm:p-6 lg:p-8 ${faqSection.visibleItems[1] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <CardContent>
                  <h3 className="text-lg sm:text-xl font-bold text-red-600 mb-3 sm:mb-4">"Não tenho tempo..."</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    <strong>→ A equipe Scalco cuida de toda a implementação.</strong> Você só precisa aprovar. Nossos consultores fazem todo o trabalho pesado.
                  </p>
                </CardContent>
              </Card>
              
              <Card className={`p-4 sm:p-6 lg:p-8 ${faqSection.visibleItems[2] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <CardContent>
                  <h3 className="text-lg sm:text-xl font-bold text-red-600 mb-3 sm:mb-4">"Já tentei e não deu certo..."</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    <strong>→ Consultoria + tecnologia no dia a dia é o que faz funcionar.</strong> Não é só um sistema ou só consultoria. É a combinação que gera resultados.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-r from-brand-dark-blue to-brand-light-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ctaSection.ref} className={`max-w-4xl mx-auto text-center ${ctaSection.isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-white mb-4 sm:mb-6 px-4">
              Pronto para parar de pagar por 100% e receber só 75%?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-brand-white/90 mb-6 sm:mb-8 leading-relaxed px-4">
              Agende uma conversa gratuita e descubra como aplicar o GAP no seu negócio para ter equipes engajadas, produtivas e responsáveis pelos resultados.
            </p>
            
            <div className="px-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-yellow to-yellow-400 text-brand-dark-blue px-6 sm:px-8 py-4 sm:py-5 text-lg sm:text-xl font-bold shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-yellow hover:to-yellow-300 hover:text-brand-dark-blue w-full sm:w-auto cursor-pointer"
                onClick={() => handleContactFormClick("Falar agora com um especialista", "cta-final")}
              >
                Falar agora com um especialista
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-brand-white/80 mt-4 sm:mt-6 px-4">
              👆 Clique para preencher o formulário de contato
            </p>
          </div>
        </div>
      </section>

      {/* Seção do Formulário de Contato */}
      <section id="contact-form" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-blue mb-4 sm:mb-6">
              ✨ Transforme sua Equipe Hoje!
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Preencha o formulário abaixo e receba um diagnóstico personalizado para sua empresa
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Formulário */}
            <div className="w-full lg:w-auto">
              <ContactForm />
            </div>
            
            {/* Benefícios ao lado */}
            <div className="w-full lg:max-w-md space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brand-dark-blue text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark-blue mb-1">Diagnóstico Gratuito</h3>
                  <p className="text-gray-600 text-sm">Análise completa da performance atual da sua equipe</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brand-dark-blue text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark-blue mb-1">Consultoria Especializada</h3>
                  <p className="text-gray-600 text-sm">Mais de 20 anos de experiência em gestão de equipes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brand-dark-blue text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark-blue mb-1">Resultados Comprovados</h3>
                  <p className="text-gray-600 text-sm">Aumento médio de 25% na produtividade das equipes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-brand-dark-blue text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark-blue mb-1">Atendimento Personalizado</h3>
                  <p className="text-gray-600 text-sm">Resposta em até 24h e consulta sem compromisso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark-blue py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="sm:col-span-2 lg:col-span-1">
                {/* Logo in footer */}
                <div className="mb-3 sm:mb-4">
                  <ScalcoLogo topSpacing="" mobileHeight="max-h-10" tabletHeight="sm:max-h-12" desktopHeight="md:max-h-14" largeDesktopHeight="lg:max-h-16" extraLargeHeight="xl:max-h-16" ultraWideHeight="2xl:max-h-16" />
                </div>
                
                <p className="text-sm sm:text-base text-white mb-3 sm:mb-4">
                  Transformamos equipes através do Método GAP: consultoria + tecnologia.
                </p>
                <p className="text-xs sm:text-sm text-white mb-2">
                  Responsável: Grupo Scalco
                </p>
                <p className="text-xs sm:text-sm text-white">
                  CNPJ: 03.148.465/0001-82
                </p>
              </div>
              
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contato</h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    <span className="text-sm text-white">(19) 98182-4256</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    <span className="text-sm text-white break-all">luiz@gruposcalco.com.br</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-brand-yellow mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">Rua Bento Martins, 1294 - São Borja - RS</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Método GAP</h4>
                <ul className="space-y-1 sm:space-y-2 text-sm text-white">
                  <li>Consultoria Especializada</li>
                  <li>Plataforma Tecnológica</li>
                  <li>Gestão de Performance</li>
                  <li>Resultados Garantidos</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Soluções</h4>
                <ul className="space-y-1 sm:space-y-2 text-sm text-white">
                  <li>Postos de Combustíveis</li>
                  <li>Gestão de Equipes</li>
                  <li>Treinamentos</li>
                  <li>Consultoria Personalizada</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-brand-white/20 pt-6 sm:pt-8 text-center">
              <p className="text-xs sm:text-sm text-white">
                © 2024 Grupo Scalco. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <PerformanceMonitor />
    </div>
  );
};

export default Index;
