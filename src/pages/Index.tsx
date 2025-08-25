import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Users, TrendingUp, Target, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, BarChart3, Zap, Shield, Brain, Eye, MessageCircle, AlertTriangle, Clock, UserX, Wrench } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import Autoplay from "embla-carousel-autoplay";
import ScalcoLogo from "@/components/ScalcoLogo";
import SalaryDeliveryChart from "@/components/SalaryDeliveryChart";
import EvolutionChart from "@/components/EvolutionChart";
import "../components/TestimonialCarousel.css";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppClick = (buttonText?: string, section?: string) => {
    // Send GTM event
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'whatsapp_click',
        button_text: buttonText || 'WhatsApp Click',
        page_section: section || 'unknown',
        click_url: 'https://wa.me/5519981824256'
      });
    }
  };

  const problemSection = useStaggeredAnimation(3, 150);
  const gapSection = useScrollAnimation();
  const pilaresSection = useStaggeredAnimation(3, 200);
  const tecnologiaSection = useStaggeredAnimation(3, 150);
  const consultoriaSection = useStaggeredAnimation(3, 100);
  const numerosSection = useStaggeredAnimation(2, 300);
  const faqSection = useStaggeredAnimation(3, 200);
  const ctaSection = useScrollAnimation();

  // Plugin para autoplay do carousel de testimonials
  const plugin = useRef(Autoplay({
    delay: 4000,
    stopOnInteraction: true
  }));

  // Plugin para autoplay do carousel de logos - velocidade otimizada
  const logoPlugin = useRef(Autoplay({
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    stopOnFocusIn: false
  }));

  const testimonials = [{
    id: 1,
    text: "Antes da Scalco \"achávamos\" muito... (eu acho que é isso, eu acho que é bom, eu acho que esse funcionário é melhor que aquele...). O primeiro impacto foi de união da equipe, uma coisa que nós não esperávamos. A gente não tinha gerentes antes... depois de implantar \"a Scalco\" nós formamos gerentes.",
    name: "Maurício Januzzi",
    company: "Postos Malerba",
    image: "/lovable-uploads/clientes/1753383807178_4_malerba.png"
  }, {
    id: 2,
    text: "Depois que a Scalco chegou a gente conseguiu sair do \"achômetro\" e ter certezas, e crescer nesse trabalho.",
    name: "Camila Maluf",
    company: "Postos Tasca",
    image: "/lovable-uploads/clientes/1753383806026_1_tasca.png"
  }, {
    id: 3,
    text: "Depois da chegada da consultoria veio um boom todo: meta, as vendas alavancaram, atendimento, conservação, limpeza e organização do posto... aí com a copa foi uma melhoria absurda. A gente tinha posto vendendo (mix automotivo) R$ 10.000,00 e depois saltou pra R$ 25.000,00 – R$ 30.000,00 então o resultado veio rápido disso aí. A equipe toda se engajou para melhorar o atendimento.",
    name: "Thiago Perin",
    company: "Rede Marcela",
    image: "/lovable-uploads/clientes/marcela.png"
  }, {
    id: 4,
    text: "Nós tínhamos um conjunto de processos próprios, mas não medíamos com a frequência e a precisão que o método GAP nos trouxe.",
    name: "Wellington Granja",
    company: "Postos Petrocal",
    image: "/lovable-uploads/clientes/petrocal.png"
  }, {
    id: 5,
    text: "Antes da Scalco, a gestão de pessoas era muito fraca, não tinha uma medida exata de cada colaborador. Nós fomos campeão Brasil no ano que a Scalco entrou, já tinha 13 anos trabalhando com loja e com a introdução da Scalco a gente ganhou concorrendo com 365 lojas na época.",
    name: "Antero Vieira",
    company: "Postos Tasca",
    image: "/lovable-uploads/clientes/1753383806026_1_tasca.png"
  }, {
    id: 6,
    text: "O elogio começou a vir e a turma não estava muito acostumada com isso... a receber elogio né... e nisso a satisfação começa a trazer resultado e isso nos deixou mais confiante no nosso trabalho.",
    name: "Marcelo Oliveira",
    company: "Rede Hurray",
    image: "/lovable-uploads/clientes/1753383806793_3_hurray.jpg"
  }];

  const clientLogos = [
    {
      src: "/lovable-uploads/logos-clientes-ativos/3irmaos.png",
      alt: "3 Irmãos",
      id: "3-irmaos"
    },
    {
      src: "/lovable-uploads/logos-clientes-ativos/bolapesada.png",
      alt: "Bola Pesada",
      id: "bola-pesada"
    },
    {
      src: "/lovable-uploads/logos-clientes-ativos/dompedro.png",
      alt: "Dom Pedro",
      id: "dom-pedro"
    },
    {
      src: "/lovable-uploads/logos-clientes-ativos/express.jpg",
      alt: "Express",
      id: "express"
    },
    {
      src: "/lovable-uploads/logos-clientes-ativos/l2.png",
      alt: "L2",
      id: "l2"
    },
    {
      src: "/lovable-uploads/logos-clientes-ativos/laurindao.png",
      alt: "Laurindão",
      id: "laurindao"
    },
    {
      src: "/lovable-uploads/logos-clientes-ativos/linke.png",
      alt: "Linke",
      id: "linke"
    },
    {
      src: "/lovable-uploads/logos-clientes-ativos/maxsul.png",
      alt: "Maxsul",
      id: "maxsul"
    },
    {
      src: "/lovable-uploads/logos-clientes-ativos/minuano.png",
      alt: "Minuano",
      id: "minuano"
    },
    {
      src: "/lovable-uploads/logos-clientes-ativos/nico.png",
      alt: "Nico",
      id: "nico"
    },
    {
      src: "/lovable-uploads/logos-clientes-ativos/operaenergy.png",
      alt: "Opera Energy",
      id: "opera-energy"
    },
    {
      src: "/lovable-uploads/logos-clientes-ativos/postoc.png",
      alt: "Posto C",
      id: "posto-c"
    },
    {
      src: "/lovable-uploads/logos-clientes-ativos/rabi.png",
      alt: "Rabi",
      id: "rabi"
    },
    {
      src: "/lovable-uploads/logos-clientes-ativos/radar.png",
      alt: "Radar",
      id: "radar"
    },
    {
      src: "/lovable-uploads/logos-clientes-ativos/redevivo.png",
      alt: "Rede Vivo",
      id: "rede-vivo"
    },
    {
      src: "/lovable-uploads/logos-clientes-ativos/rota.png",
      alt: "Rota",
      id: "rota"
    },
    {
      src: "/lovable-uploads/logos-clientes-ativos/santaterezinha.png",
      alt: "Santa Terezinha",
      id: "santa-terezinha"
    },
    {
      src: "/lovable-uploads/logos-clientes-ativos/sobralepalacio.png",
      alt: "Sobral e Palácio",
      id: "sobral-palacio"
    },
    {
      src: "/lovable-uploads/logos-clientes-ativos/tradicao.png",
      alt: "Tradição",
      id: "tradicao"
    }
  ];

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
                Você paga <span className="bg-gradient-to-r from-brand-yellow to-yellow-400 bg-clip-text text-transparent">100%</span>.
                <br />
                Sua equipe entrega só <span className="text-red-600">75%</span>.
                <br />
                <span className="bg-gradient-to-r from-brand-yellow to-yellow-400 bg-clip-text text-transparent">Isso é justo?</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-white/90 mb-6 sm:mb-8 leading-relaxed text-zinc-200 px-4">
               Consultoria em gestão de pessoas + tecnologia para transformar o desempenho da sua empresa.
              </p>
              
              <div className="px-2 sm:px-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-brand-yellow to-yellow-400 text-brand-dark-blue px-3 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-base md:text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-yellow hover:to-yellow-300 hover:text-brand-dark-blue w-full sm:w-auto leading-tight">
                  <a href="https://wa.me/5519981824256?text=Olá!%20Quero%20conhecer%20o%20Método%20GAP%20e%20fazer%20meu%20diagnóstico%20gratuito." target="_blank" rel="noopener noreferrer" onClick={() => handleWhatsAppClick("Falar agora com um especialista", "hero")}>
                    Falar agora com um especialista
                    <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-5 sm:h-5 flex-shrink-0" />
                  </a>
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
                Você cumpre sua parte. E a sua equipe?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 px-4">
                Você garante estrutura, pagamento e condições. E ainda precisa cobrar o óbvio?
              </p>
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
                  <SalaryDeliveryChart />
                </div>
              </div>
            </div>

            <div className="text-center px-4">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 font-semibold">
                Essa é a realidade de muitas empresas com várias unidades e equipes descentralizadas.
              </p>
              
              <Button asChild size="lg" className="bg-brand-dark-blue text-brand-white hover:bg-brand-dark-blue/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto">
                <a href="https://wa.me/5519981824256?text=Olá!%20Quero%20conhecer%20o%20Método%20GAP%20e%20fazer%20meu%20diagnóstico%20gratuito." target="_blank" rel="noopener noreferrer" onClick={() => handleWhatsAppClick("Corrigir desequilíbrio", "problema")}>
                  Corrigir desequilíbrio
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O que é o GAP */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-brand-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div ref={gapSection.ref} className={`text-center mb-8 sm:mb-12 ${gapSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark-blue mb-4 sm:mb-6 px-4">
                O que é o Método GAP?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed px-4">
                Uma solução prática para você, gestor, voltar a ter o controle e a confiança da sua equipe.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
              <Card className={`p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-brand-dark-blue to-brand-light-blue text-brand-white ${gapSection.isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <CardContent>
                  <Brain className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-brand-yellow mb-4 sm:mb-6" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">🧠 Consultoria em gestão de pessoas</h3>
                  <p className="text-sm sm:text-base text-brand-white/90 leading-relaxed">
                    Especialistas que entendem o seu desafio e implementam soluções práticas na sua realidade.
                  </p>
                </CardContent>
              </Card>
              
              <Card className={`p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-brand-yellow to-yellow-400 text-brand-dark-blue ${gapSection.isVisible ? 'animate-fade-in-left' : 'opacity-0'}`} style={{
              animationDelay: '0.2s'
            }}>
                <CardContent>
                  <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-brand-dark-blue mb-4 sm:mb-6" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">📊 Plataforma com indicadores de desempenho</h3>
                  <p className="text-sm sm:text-base text-brand-dark-blue/90 leading-relaxed">
                    Tecnologia que mostra, em tempo real, a entrega de cada colaborador, setor ou unidade.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center px-4">
              <p className="text-base sm:text-lg md:text-xl text-brand-dark-blue font-semibold mb-6 sm:mb-8">
                Com o GAP, você acompanha a entrega de cada colaborador, setor ou unidade – tudo em tempo real.
              </p>
              
              <Button asChild size="lg" className="bg-brand-light-blue text-brand-white hover:bg-brand-light-blue/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto">
                <a href="https://wa.me/5519981824256?text=Olá!%20Quero%20conhecer%20o%20Método%20GAP%20e%20fazer%20meu%20diagnóstico%20gratuito." target="_blank" rel="noopener noreferrer" onClick={() => handleWhatsAppClick("Conhecer o GAP", "gap")}>
                  Conhecer o GAP
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Os 3 Pilares do GAP */}
      <section id="pilares" className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark-blue mb-4 sm:mb-6 px-4">
              Os 3 Pilares do GAP
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-4">
              Veja como o método funciona e onde está o diferencial prático
            </p>
          </div>
          
          <div ref={pilaresSection.ref} className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <Card className={`p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 ${pilaresSection.visibleItems[0] ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <CardContent className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-red-600" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-dark-blue mb-3 sm:mb-4">1. Desconforto positivo</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Quem não entrega, perde pontos. Consequências claras para baixa performance.
                </p>
              </CardContent>
            </Card>
            
            <Card className={`p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 ${pilaresSection.visibleItems[1] ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <CardContent className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-dark-blue mb-3 sm:mb-4">2. Reconhecimento</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Quem entrega bem, ganha visibilidade. Valorização dos que fazem a diferença.
                </p>
              </CardContent>
            </Card>
            
            <Card className={`p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300 ${pilaresSection.visibleItems[2] ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <CardContent className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-dark-blue mb-3 sm:mb-4">3. Gestão de Conflitos</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Consultores com empatia e firmeza para destravar resistências.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center px-4">
            <Button asChild size="lg" className="bg-brand-dark-blue text-brand-white hover:bg-brand-dark-blue/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto">
              <a href="https://wa.me/5519981824256?text=Olá!%20Quero%20conhecer%20o%20Método%20GAP%20e%20fazer%20meu%20diagnóstico%20gratuito." target="_blank" rel="noopener noreferrer" onClick={() => handleWhatsAppClick("Aplicar no meu time", "pilares")}>
                Aplicar no meu time
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Tecnologia que te dá controle */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-brand-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark-blue mb-4 sm:mb-6 px-4">
              Tecnologia que te dá o controle
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-brand-dark-blue font-semibold mb-6 sm:mb-8 px-4">
              Você vai enxergar, de forma clara, quem entrega, quem enrola e onde agir.
            </p>
          </div>
          
          <div ref={tecnologiaSection.ref} className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <Card className={`p-4 sm:p-6 bg-gradient-to-br from-brand-light-blue to-brand-dark-blue text-brand-white ${tecnologiaSection.visibleItems[0] ? 'animate-fade-in-scale' : 'opacity-0'}`}>
              <CardContent className="text-center">
                <Eye className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-brand-yellow mb-3 sm:mb-4 mx-auto" />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-sky-950">Acompanhamento Total</h3>
                <p className="text-xs sm:text-sm text-brand-white/90 text-blue-950">Por pessoa, tarefa e setor</p>
              </CardContent>
            </Card>
            
            <Card className={`p-4 sm:p-6 bg-gradient-to-br from-brand-yellow to-yellow-400 text-brand-dark-blue ${tecnologiaSection.visibleItems[1] ? 'animate-fade-in-scale' : 'opacity-0'}`}>
              <CardContent className="text-center">
                <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-brand-dark-blue mb-3 sm:mb-4 mx-auto" />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3">Relatórios Automáticos</h3>
                <p className="text-xs sm:text-sm text-brand-dark-blue/90">Gráficos em tempo real</p>
              </CardContent>
            </Card>
            
            <Card className={`p-4 sm:p-6 bg-gradient-to-br from-brand-dark-blue to-brand-light-blue text-brand-white ${tecnologiaSection.visibleItems[2] ? 'animate-fade-in-scale' : 'opacity-0'}`}>
              <CardContent className="text-center">
                <Phone className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-brand-yellow mb-3 sm:mb-4 mx-auto" />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3">Acesso Total</h3>
                <p className="text-xs sm:text-sm text-brand-white/90">No celular e no computador</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center px-4">
            <Button asChild size="lg" className="bg-brand-light-blue text-brand-white hover:bg-brand-light-blue/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto">
              <a href="https://wa.me/5519981824256?text=Olá!%20Quero%20conhecer%20o%20Método%20GAP%20e%20fazer%20meu%20diagnóstico%20gratuito." target="_blank" rel="noopener noreferrer" onClick={() => handleWhatsAppClick("Quero essa visão", "tecnologia")}>
                Quero essa visão
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Consultoria com gente de verdade */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-r from-brand-dark-blue to-brand-light-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-white mb-4 sm:mb-6 px-4">
              Consultoria com gente de verdade
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-brand-white/90 mb-6 sm:mb-8 leading-relaxed px-4">
              A plataforma aponta. Nossos consultores fazem acontecer.
            </p>
            
            <div ref={consultoriaSection.ref} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              <Card className={`p-4 sm:p-6 bg-brand-white/10 backdrop-blur-sm border-brand-white/20 ${consultoriaSection.visibleItems[0] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <CardContent className="text-center">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-brand-yellow mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-brand-white mb-1 sm:mb-2">Desenvolvimento humano</h3>
                </CardContent>
              </Card>
              
              <Card className={`p-4 sm:p-6 bg-brand-white/10 backdrop-blur-sm border-brand-white/20 ${consultoriaSection.visibleItems[1] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <CardContent className="text-center">
                  <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-brand-yellow mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-brand-white mb-1 sm:mb-2">Conversas olho no olho</h3>
                </CardContent>
              </Card>
              
              <Card className={`p-4 sm:p-6 bg-brand-white/10 backdrop-blur-sm border-brand-white/20 ${consultoriaSection.visibleItems[2] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <CardContent className="text-center">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-brand-yellow mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-brand-white mb-1 sm:mb-2">Apoio nos momentos difíceis</h3>
                </CardContent>
              </Card>
            </div>
            
            <div className="px-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-brand-yellow to-yellow-400 text-brand-dark-blue px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-yellow hover:to-yellow-300 hover:text-brand-dark-blue w-full sm:w-auto">
                <a href="https://wa.me/5519981824256?text=Olá!%20Quero%20conhecer%20o%20Método%20GAP%20e%20fazer%20meu%20diagnóstico%20gratuito." target="_blank" rel="noopener noreferrer" onClick={() => handleWhatsAppClick("Conversar com especialista", "consultoria")}>
                  Conversar com especialista
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </a>
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
              <EvolutionChart />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-dark-blue mb-6 sm:mb-8 text-center px-4">O que nossos clientes dizem:</h3>
            
            <Carousel plugins={[plugin.current]} className="w-full max-w-5xl mx-auto testimonial-carousel px-4" onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset} opts={{
            align: "center",
            loop: true
          }}>
              <CarouselContent>
                {testimonials.map((testimonial, index) => <CarouselItem key={testimonial.id} className="basis-full md:basis-4/5 lg:basis-3/5">
                    <div className="p-2">
                      <Card className="h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] transition-all duration-300 hover:shadow-xl">
                        <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full">
                          <div className="flex-grow flex flex-col">
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 italic mb-4 sm:mb-6 md:mb-8 leading-relaxed overflow-hidden">
                              "{testimonial.text}"
                            </p>
                          </div>
                          <div className="flex items-center gap-3 sm:gap-4 mt-auto pt-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                              <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-contain" />
                            </div>
                            <div>
                              <div className="text-sm sm:text-base md:text-lg font-bold text-brand-dark-blue">{testimonial.name}</div>
                              <div className="text-xs sm:text-sm md:text-base text-gray-600">{testimonial.company}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="-left-12" />
                <CarouselNext className="-right-12" />
              </div>
            </Carousel>
          </div>

          <div className="text-center px-4">
            <Button asChild size="lg" className="bg-brand-dark-blue text-brand-white hover:bg-brand-dark-blue/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto">
              <a href="https://wa.me/5519981824256?text=Olá!%20Quero%20conhecer%20o%20Método%20GAP%20e%20fazer%20meu%20diagnóstico%20gratuito." target="_blank" rel="noopener noreferrer" onClick={() => handleWhatsAppClick("Quero esses resultados", "numeros")}>
                Quero esses resultados
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
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
            <Carousel 
              plugins={[logoPlugin.current]} 
              className="w-full logo-carousel" 
              onMouseEnter={() => logoPlugin.current.stop()} 
              onMouseLeave={() => logoPlugin.current.reset()}
              opts={{
                align: "start",
                loop: true,
                skipSnaps: false,
                dragFree: true
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {clientLogos.map((cliente) => (
                  <CarouselItem 
                    key={cliente.id} 
                    className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 client-logo-item"
                  >
                     <div className="flex justify-center items-center p-3 sm:p-4 h-24 sm:h-28 md:h-32 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
                        <img 
                           src={cliente.src} 
                           alt={cliente.alt} 
                           className="max-h-full max-w-full w-auto object-contain hover:scale-105 transition-transform duration-300" 
                           loading="lazy"
                           onError={(e) => {
                             console.error(`❌ Erro ao carregar imagem: ${cliente.src}`, e);
                             e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvZ28gRW1wcmVzYTwvdGV4dD48L3N2Zz4=';
                             e.currentTarget.alt = `Logo ${cliente.alt} (placeholder)`;
                           }}
                         />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Controles de navegação apenas para desktop */}
              <div className="hidden md:block">
                <CarouselPrevious className="-left-8 lg:-left-12 bg-white/90 hover:bg-white border-2 border-gray-200 carousel-controls" />
                <CarouselNext className="-right-8 lg:-right-12 bg-white/90 hover:bg-white border-2 border-gray-200 carousel-controls" />
              </div>
            </Carousel>
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
              Pronto para parar de pagar 100% e receber só 75%?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-brand-white/90 mb-6 sm:mb-8 leading-relaxed px-4">
              Agende agora um diagnóstico gratuito com um de nossos especialistas.<br className="hidden sm:block" />
              Descubra como aplicar o GAP no seu negócio.
            </p>
            
            <div className="px-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-brand-yellow to-yellow-400 text-brand-dark-blue px-6 sm:px-8 py-4 sm:py-5 text-lg sm:text-xl font-bold shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-yellow hover:to-yellow-300 hover:text-brand-dark-blue w-full sm:w-auto">
                <a href="https://wa.me/5519981824256?text=Olá!%20Quero%20conhecer%20o%20Método%20GAP%20e%20fazer%20meu%20diagnóstico%20gratuito." target="_blank" rel="noopener noreferrer" onClick={() => handleWhatsAppClick("Diagnóstico gratuito", "cta-final")}>
                  Diagnóstico gratuito
                  <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-brand-white/80 mt-4 sm:mt-6 px-4">
              👆 Clique e fale direto com nosso especialista no WhatsApp
            </p>
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
    </div>
  );
};

export default Index;
