
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, TrendingUp, MessageCircle, Mail, CheckCircle, BarChart3, Target, Zap } from 'lucide-react';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '5511999999999';
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Método GAP e como ele pode transformar a gestão da minha equipe.");
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    // Animação de entrada dos elementos
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observar elementos para animação
    const elementsToAnimate = document.querySelectorAll('.animate-element');
    elementsToAnimate.forEach(el => {
      observer.observe(el);
    });

    // Animação das barras de progresso
    const progressBars = document.querySelectorAll('.progress-fill');
    const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target as HTMLElement;
          progressBar.style.animation = 'fillProgress 2s ease-out forwards';
        }
      });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
      progressObserver.observe(bar);
    });

    // Contador animado para métricas
    const animateCounters = () => {
      const counters = document.querySelectorAll('.metric-value');
      counters.forEach(counter => {
        const target = parseInt(counter.textContent || '0');
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current) + '%';
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target + '%';
          }
        };
        
        updateCounter();
      });
    };

    // Observar seção da plataforma para iniciar contador
    const platformSection = document.querySelector('.platform-section');
    if (platformSection) {
      const platformObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            platformObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      platformObserver.observe(platformSection);
    }

    // Efeito parallax suave no hero
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      if (hero) {
        const rate = scrolled * -0.5;
        (hero as HTMLElement).style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Adicionar efeitos hover aos botões
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
      const handleMouseEnter = () => {
        (button as HTMLElement).style.transform = 'translateY(-2px)';
        (button as HTMLElement).style.boxShadow = '0 8px 25px rgba(0, 123, 255, 0.3)';
      };
      
      const handleMouseLeave = () => {
        (button as HTMLElement).style.transform = 'translateY(0)';
        (button as HTMLElement).style.boxShadow = 'none';
      };

      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      progressObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/1fb3e78a-ba18-46de-9a0b-ae1ca0b9a55b.png" 
                alt="25 Anos - Grupo Scalco" 
                className="h-12 w-auto"
              />
            </div>
            <Button 
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white cta-button"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Fale Conosco
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero py-20 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2">
                🚀 MÉTODO COMPROVADO
              </Badge>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Sua equipe entrega o que foi <span className="text-orange-400">combinado</span>, com <span className="text-orange-400">qualidade</span> e no <span className="text-orange-400">prazo</span>?
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                O <strong>Método GAP</strong> da Scalco combina consultoria especializada em gestão de pessoas com uma plataforma própria de acompanhamento. Fazemos sua equipe realizar o que precisa ser feito.
              </p>
              <Button 
                onClick={openWhatsApp}
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg cta-button"
              >
                <Rocket className="w-5 h-5 mr-3" />
                Quero uma gestão mais eficiente
              </Button>
            </div>
            <div className="flex justify-center">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Tarefas planejadas:</span>
                      <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">100%</Badge>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-4">
                      <div className="bg-blue-500 h-4 rounded-full w-full progress-fill"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Equipe entrega:</span>
                      <Badge className="bg-red-500 text-white px-4 py-2 text-lg">75%</Badge>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-4">
                      <div className="bg-red-500 h-4 rounded-full w-3/4 progress-fill"></div>
                    </div>
                    <div className="text-center pt-4 border-t border-white/20">
                      <p className="text-orange-300 font-semibold">Vamos mudar isso!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-6">
              O desafio de toda liderança
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Gestão eficiente não é sobre controlar pessoas, é sobre criar condições para que sua equipe realize o que foi combinado, com qualidade e no prazo certo.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-red-800 mb-4">Sinais que você conhece:</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        Tarefas que "ficaram para depois"
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        Falta de clareza sobre responsabilidades
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        Equipe desmotivada e sem direcionamento
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        Gestão baseada em "achismos"
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <p className="text-3xl font-bold text-red-600 mb-2">Resultado:</p>
                      <p className="text-gray-600">Gestão imprevisível e menos eficiente</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solucao" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-secondary text-white px-4 py-2">SOLUÇÃO SCALCO</Badge>
            <h2 className="text-4xl font-bold text-brand-primary mb-6">
              Método GAP: Gestão eficiente e previsível
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma combinação única de <strong>consultoria em gestão de pessoas</strong> com <strong>plataforma própria</strong> 
              que torna a gestão mais eficiente através de gamificação e indicadores em tempo real.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-xl">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <div className="inline-block bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-lg">
                    <h3 className="text-2xl font-bold">MÉTODO GAP</h3>
                    <p className="text-blue-100">Gestão para Alta Performance</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-brand-secondary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Consultoria em Pessoas</h4>
                    <p className="text-gray-600">Especialistas que contribuem para a realização pessoal e profissional das pessoas</p>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-brand-primary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Plataforma Própria</h4>
                    <p className="text-gray-600">Acompanhamento de tarefas com gamificação e indicadores em tempo real</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works - Pillars */}
      <section id="pilares" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-6">
              Como funciona o Método GAP
            </h2>
            <p className="text-xl text-gray-600">
              Nossa abordagem se baseia em três pilares fundamentais:
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-shadow animate-element">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-center text-red-600">Desconforto Produtivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Criar o desconforto necessário para que sua equipe saia da zona de conforto e busque a excelência.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-element">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-center text-green-600">Reconhecimento Justo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Sistema de reconhecimento baseado em mérito e resultados concretos, promovendo a realização profissional.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-element">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-brand-secondary" />
                </div>
                <CardTitle className="text-center text-brand-secondary">Gestão de Conflitos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Transformar conflitos em oportunidades de crescimento e melhoria contínua.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Gamificação Inteligente</h3>
                <p className="text-purple-700">
                  Transformamos o acompanhamento de tarefas em uma experiência engajante, 
                  com indicadores de desempenho em tempo real que motivam e orientam sua equipe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="plataforma" className="platform-section py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-brand-primary text-white px-4 py-2">PLATAFORMA PRÓPRIA</Badge>
              <h2 className="text-4xl font-bold text-brand-primary mb-6">
                Indicadores em tempo real para gestão previsível
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nossa plataforma própria mostra em tempo real o andamento das tarefas, 
                com relatórios detalhados, gamificação e indicadores de performance que tornam a gestão previsível.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Acompanhamento de tarefas em tempo real</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Gamificação para engajamento</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Relatórios automáticos de performance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Gestão previsível baseada em dados</span>
                </div>
              </div>
              <Button 
                onClick={openWhatsApp}
                className="bg-brand-primary hover:bg-brand-secondary text-white cta-button"
              >
                Conhecer a plataforma
              </Button>
            </div>
            <div>
              <Card className="bg-white shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-center text-brand-primary">Dashboard - Método GAP</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg animate-element">
                      <span className="font-medium">Tarefas Concluídas</span>
                      <Badge className="bg-green-600 text-white metric-value">87%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg animate-element">
                      <span className="font-medium">Performance Geral</span>
                      <Badge className="bg-brand-secondary text-white metric-value">92%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg animate-element">
                      <span className="font-medium">Engajamento</span>
                      <Badge className="bg-purple-600 text-white metric-value">95%</Badge>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 text-center">
                        Indicadores atualizados em tempo real
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy Section */}
      <section id="consultoria" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-6">
              Consultoria focada na realização das pessoas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa missão é contribuir significativamente para a realização pessoal e profissional das pessoas. 
              Nossos consultores especializados trabalham o desenvolvimento humano em cada organização.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-brand-secondary to-brand-primary text-white">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <Users className="w-20 h-20 mx-auto mb-6 text-blue-200" />
                  <h3 className="text-3xl font-bold mb-4">Consultoria Especializada</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-200">Nossa abordagem:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                        <span>Desenvolvimento do potencial individual</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                        <span>Realização pessoal e profissional</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                        <span>Alinhamento de propósitos e metas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                        <span>Cultura de alta performance sustentável</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-4 text-orange-300">Nossa visão:</h4>
                    <p className="text-lg italic">
                      "Queremos atingir 50 mil usuários ativos até 2028, 
                      transformando a gestão de equipes em organizações de todos os tamanhos."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="resultados" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-6">
              Gestão baseada em dados, não em achismos
            </h2>
            <p className="text-xl text-gray-600">
              Com o Método GAP, você tem visibilidade completa sobre sua equipe:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow animate-element">
              <CardContent className="p-6">
                <BarChart3 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-brand-primary mb-2">Setores mais produtivos</h3>
                <p className="text-gray-600 text-sm">Identifique quais áreas estão entregando melhor</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-element">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-brand-primary mb-2">Talentos em destaque</h3>
                <p className="text-gray-600 text-sm">Reconheça quem realmente veste a camisa</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-element">
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-brand-primary mb-2">Gargalos mapeados</h3>
                <p className="text-gray-600 text-sm">Encontre e elimine pontos de travamento</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-element">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-brand-primary mb-2">Decisões assertivas</h3>
                <p className="text-gray-600 text-sm">Base sólida de dados para escolhas certas</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="bg-green-600 text-white max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Gestão eficiente e previsível</h3>
                <p className="text-green-100 text-lg">
                  Transforme sua gestão de reativa para proativa. 
                  Tenha dados concretos para tomar as melhores decisões sobre sua equipe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-6">
              Pronto para uma gestão mais eficiente e previsível?
            </h2>
            <p className="text-2xl mb-12 text-orange-100">
              O Método GAP está pronto para transformar sua gestão. 
              <br />Converse conosco e descubra como podemos contribuir para a realização da sua equipe.
            </p>
            <Button 
              onClick={openWhatsApp}
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold mb-8 cta-button"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Quero conhecer o Método GAP
            </Button>
            <div className="flex justify-center space-x-8 mt-8">
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                <span>WhatsApp: (11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>contato@scalcoconsultoria.com.br</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/1fb3e78a-ba18-46de-9a0b-ae1ca0b9a55b.png" 
                alt="25 Anos - Grupo Scalco" 
                className="h-16 w-auto opacity-80"
              />
            </div>
            <p className="text-slate-400 mb-2">Método GAP - Gestão para Alta Performance</p>
            <p className="text-slate-500 text-sm mb-4">
              Contribuindo para a realização pessoal e profissional das pessoas
            </p>
            <p className="text-slate-500 text-sm">
              © 2024 Scalco Consultoria. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
