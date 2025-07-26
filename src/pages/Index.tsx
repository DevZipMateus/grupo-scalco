
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, TrendingUp, MessageCircle, Mail, CheckCircle, BarChart3, Target, Zap, Shield, Clock, AlertTriangle, Eye, Phone, MapPin } from 'lucide-react';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '5511999999999';
    const message = encodeURIComponent("Olá! Quero aplicar o Método GAP na minha empresa e agendar meu diagnóstico gratuito.");
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const openWhatsAppDiagnosis = () => {
    const phoneNumber = '5511999999999';
    const message = encodeURIComponent("Olá! Quero agendar meu diagnóstico gratuito do Método GAP.");
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

    const elementsToAnimate = document.querySelectorAll('.animate-element');
    elementsToAnimate.forEach(el => {
      observer.observe(el);
    });

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

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      if (hero) {
        const rate = scrolled * -0.5;
        (hero as HTMLElement).style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

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

      {/* Hero Section - Quebra de padrão + benefício direto */}
      <section className="hero py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 font-bold">
                +80 EMPRESAS TRANSFORMADAS COM O GAP
              </Badge>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Você paga <span className="text-yellow-300">100%</span>. Sua equipe entrega só <span className="text-yellow-300">75%</span>. Isso é justo?
              </h1>
              <p className="text-xl mb-8 text-red-100">
                Chegou o <strong>Método GAP</strong>: consultoria em gestão de pessoas + tecnologia para transformar o desempenho da sua empresa.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-lg">
                  <CheckCircle className="w-6 h-6 text-green-300 mr-3" />
                  <span>✅ Mais controle</span>
                </div>
                <div className="flex items-center text-lg">
                  <CheckCircle className="w-6 h-6 text-green-300 mr-3" />
                  <span>✅ Mais entrega</span>
                </div>
                <div className="flex items-center text-lg">
                  <CheckCircle className="w-6 h-6 text-green-300 mr-3" />
                  <span>✅ Menos desculpas</span>
                </div>
              </div>

              <Button 
                onClick={openWhatsApp}
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg font-bold cta-button"
              >
                <Rocket className="w-5 h-5 mr-3" />
                Quero aplicar o Método GAP na minha empresa
              </Button>
            </div>
            <div className="flex justify-center">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">A Realidade:</h3>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Você paga:</span>
                      <Badge className="bg-red-600 text-white px-4 py-2 text-lg">100%</Badge>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-4">
                      <div className="bg-red-500 h-4 rounded-full w-full progress-fill"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Equipe entrega:</span>
                      <Badge className="bg-orange-500 text-white px-4 py-2 text-lg">75%</Badge>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-4">
                      <div className="bg-orange-500 h-4 rounded-full w-3/4 progress-fill"></div>
                    </div>
                    <div className="text-center pt-4 border-t border-white/20">
                      <p className="text-yellow-300 font-semibold text-lg">É hora de mudar isso!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Você cumpre sua parte. E a sua equipe? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-6">
              Você cumpre sua parte. E a sua equipe?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Você garante estrutura, pagamento e condições. E ainda precisa cobrar o óbvio?
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-red-50 border-red-200 animate-element">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-red-800 mb-2">Tarefas entregues fora do prazo</h3>
                </CardContent>
              </Card>
              
              <Card className="bg-red-50 border-red-200 animate-element">
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-red-800 mb-2">Ninguém sabe quem faz o quê</h3>
                </CardContent>
              </Card>
              
              <Card className="bg-red-50 border-red-200 animate-element">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-red-800 mb-2">Trabalhos feitos de qualquer jeito</h3>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-8 italic">
                Essa é a realidade de muitas empresas com várias unidades e equipes descentralizadas.
              </p>
              
              <Button 
                onClick={openWhatsApp}
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg cta-button"
              >
                Quero corrigir esse desequilíbrio agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O que é o Método GAP? */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-6">
              O que é o Método GAP?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Uma solução prática para você, gestor, voltar a ter o controle e a confiança da sua equipe.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-xl">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <div className="inline-block bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-lg">
                    <h3 className="text-2xl font-bold">COMBINAÇÃO ÚNICA</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-brand-secondary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">🧠 Consultoria em gestão de pessoas</h4>
                    <p className="text-gray-600">Especialistas que sabem como fazer sua equipe entregar</p>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-brand-primary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">📊 Plataforma com indicadores de desempenho</h4>
                    <p className="text-gray-600">Acompanhamento em tempo real de cada colaborador</p>
                  </div>
                </div>
                
                <div className="text-center bg-blue-50 p-6 rounded-lg">
                  <p className="text-lg text-brand-primary font-medium">
                    Com o GAP, você acompanha a entrega de cada colaborador, setor ou unidade – tudo em tempo real.
                  </p>
                </div>
                
                <div className="text-center mt-8">
                  <Button 
                    onClick={openWhatsApp}
                    size="lg" 
                    className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 text-lg cta-button"
                  >
                    Conheça o Método GAP
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Os 3 Pilares do GAP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-6">
              Os 3 Pilares do GAP
            </h2>
            <p className="text-xl text-gray-600">
              O método que funciona porque combina psicologia, tecnologia e resultados práticos.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-shadow animate-element border-t-4 border-t-red-500">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-center text-red-600">1. Desconforto Positivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center font-medium">
                  Quem não entrega, perde pontos.
                </p>
                <p className="text-gray-500 text-center text-sm mt-2">
                  Sistema transparente que mostra quem está cumprindo e quem está devendo.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-element border-t-4 border-t-green-500">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-center text-green-600">2. Reconhecimento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center font-medium">
                  Quem entrega bem, ganha visibilidade.
                </p>
                <p className="text-gray-500 text-center text-sm mt-2">
                  Reconhecimento justo baseado em dados reais, não em impressões.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-element border-t-4 border-t-blue-500">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-brand-secondary" />
                </div>
                <CardTitle className="text-center text-brand-secondary">3. Gestão de Conflitos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center font-medium">
                  Consultores com empatia e firmeza para destravar resistências.
                </p>
                <p className="text-gray-500 text-center text-sm mt-2">
                  Apoio humano nos momentos mais difíceis da mudança.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              onClick={openWhatsApp}
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg cta-button"
            >
              Quero aplicar isso no meu time
            </Button>
          </div>
        </div>
      </section>

      {/* Tecnologia que te dá o controle */}
      <section className="platform-section py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-brand-primary text-white px-4 py-2">TECNOLOGIA EXCLUSIVA</Badge>
              <h2 className="text-4xl font-bold text-brand-primary mb-6">
                Tecnologia que te dá o controle
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">✅ Acompanhamento por pessoa, tarefa e setor</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">✅ Relatórios automáticos e gráficos em tempo real</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">✅ Funciona no celular e no computador</span>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-brand-primary mb-2">Você vai enxergar, de forma clara:</h3>
                <p className="text-lg text-gray-700">
                  <strong>Quem entrega</strong>, <strong>quem enrola</strong> e <strong>onde agir</strong>.
                </p>
              </div>
              
              <Button 
                onClick={openWhatsApp}
                size="lg"
                className="bg-brand-primary hover:bg-brand-secondary text-white cta-button"
              >
                <Eye className="w-5 h-5 mr-3" />
                Quero essa visão na minha empresa
              </Button>
            </div>
            <div>
              <Card className="bg-white shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-center text-brand-primary">Dashboard - Controle Total</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg animate-element">
                      <span className="font-medium">João - Vendas</span>
                      <Badge className="bg-green-600 text-white metric-value">95%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg animate-element">
                      <span className="font-medium">Maria - Atendimento</span>
                      <Badge className="bg-yellow-600 text-white metric-value">78%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg animate-element">
                      <span className="font-medium">Pedro - Estoque</span>
                      <Badge className="bg-red-600 text-white metric-value">45%</Badge>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 text-center">
                        <strong>Você sabe exatamente onde agir</strong>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Consultoria com gente de verdade */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-6">
              Consultoria com gente de verdade
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A plataforma aponta. Nossos consultores fazem acontecer.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-brand-secondary to-brand-primary text-white">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <Users className="w-20 h-20 mx-auto mb-6 text-blue-200" />
                  <h3 className="text-3xl font-bold mb-4">Apoio Humano Real</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-2 text-blue-200">✔️ Desenvolvimento humano</h4>
                      <p className="text-sm">Foco no crescimento de cada pessoa</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-2 text-blue-200">✔️ Conversas olho no olho</h4>
                      <p className="text-sm">Relacionamento próximo e direto</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-2 text-blue-200">✔️ Apoio nos momentos difíceis</h4>
                      <p className="text-sm">Suporte quando mais precisa</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Button 
                    onClick={openWhatsApp}
                    size="lg" 
                    className="bg-white text-brand-primary hover:bg-gray-100 px-8 py-4 text-lg font-bold cta-button"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Quero conversar com um especialista
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Você não precisa acreditar na gente. Acredite nos números. */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-6">
              Você não precisa acreditar na gente. Acredite nos números.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white shadow-xl animate-element">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-green-600 mb-2">+87%</div>
                  <p className="text-xl font-semibold text-gray-800">📈 de tarefas entregues corretamente</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl animate-element">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-2">+92%</div>
                  <p className="text-xl font-semibold text-gray-800">🚀 de aumento na performance geral em apenas 60 dias</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-blue-50 border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <p className="text-lg text-gray-700 italic mb-4">
                    "A equipe passou a se responsabilizar sem eu ficar em cima."
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">— Gestor de rede de supermercados</p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <p className="text-lg text-gray-700 italic mb-4">
                    "Vi quem realmente veste a camisa."
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">— Proprietário de rede de postos</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={openWhatsApp}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg cta-button"
            >
              <TrendingUp className="w-5 h-5 mr-3" />
              Quero esses resultados no meu negócio
            </Button>
          </div>
        </div>
      </section>

      {/* Quem usa o GAP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-6">
              Quem usa o GAP
            </h2>
            <p className="text-xl text-gray-600">
              Empresas com várias unidades já usam o GAP para escalar desempenho.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow animate-element">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-primary mb-2">Supermercados</h3>
                  <p className="text-gray-600 text-sm">Redes com múltiplas lojas</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow animate-element">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-primary mb-2">Postos de Combustível</h3>
                  <p className="text-gray-600 text-sm">Controle de equipes descentralizadas</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow animate-element">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-primary mb-2">Redes de Lojas</h3>
                  <p className="text-gray-600 text-sm">Gestão de performance por unidade</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Caso de Sucesso</h3>
                <p className="text-lg text-purple-700 mb-4">
                  Rede de supermercados com 15 unidades aumentou a entrega de tarefas de 60% para 87% em 3 meses.
                </p>
                <Badge className="bg-purple-600 text-white px-4 py-2">Resultado Comprovado</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mas será que funciona aqui? */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-6">
              "Mas será que funciona aqui?"
            </h2>
            <p className="text-xl text-gray-600">
              As dúvidas mais comuns e nossas respostas diretas:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow animate-element">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">"Aqui o pessoal é resistente..."</h3>
                      <p className="text-gray-600">→ O GAP foi criado para ambientes tradicionais e difíceis. Nossa experiência está justamente em transformar resistência em engajamento.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-element">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">"Não tenho tempo..."</h3>
                      <p className="text-gray-600">→ A equipe Scalco cuida de toda a implementação. Você só precisa ver os resultados aparecerem.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-element">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">"Já tentei e não deu certo..."</h3>
                      <p className="text-gray-600">→ Consultoria + tecnologia no dia a dia é o que faz funcionar. Não é só sistema, não é só conversa. É a combinação que gera resultado.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Diagnóstico Gratuito */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-6">
              Pronto para parar de pagar 100% e receber só 75%?
            </h2>
            <p className="text-2xl mb-12 text-orange-100">
              Agende agora um <strong>diagnóstico gratuito</strong> com um de nossos especialistas.
              <br />Descubra como aplicar o GAP no seu negócio.
            </p>
            <Button 
              onClick={openWhatsAppDiagnosis}
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold mb-8 cta-button"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Quero meu diagnóstico gratuito
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

      {/* Footer Profissional */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex justify-center md:justify-start mb-4">
                <img 
                  src="/lovable-uploads/1fb3e78a-ba18-46de-9a0b-ae1ca0b9a55b.png" 
                  alt="25 Anos - Grupo Scalco" 
                  className="h-16 w-auto opacity-80"
                />
              </div>
              <p className="text-slate-400 text-sm">
                Método GAP - Gestão para Alta Performance
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Sobre a Scalco</h4>
              <p className="text-slate-400 text-sm mb-2">
                25 anos contribuindo para a realização pessoal e profissional das pessoas
              </p>
              <p className="text-slate-500 text-xs">
                CNPJ: 00.000.000/0001-00
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-slate-400">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>contato@scalcoconsultoria.com.br</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Menu</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="text-slate-400 hover:text-white block">Termos de Uso</a>
                <a href="#" className="text-slate-400 hover:text-white block">Privacidade</a>
                <a href="#" className="text-slate-400 hover:text-white block">Contato</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
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
