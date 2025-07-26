import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Target, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, BarChart3, Zap, Shield, Brain, Eye, MessageCircle, AlertTriangle, Clock, UserX, Wrench } from "lucide-react";

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
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Quero conhecer o Método GAP e fazer meu diagnóstico gratuito.");
    window.open(`https://wa.me/5551999712999?text=${message}`, '_blank');
  };
  return <div className="min-h-screen bg-brand-white overflow-x-hidden">
      {/* Hero Section - Quebra de padrão */}
      <section className="relative bg-gradient-to-r from-brand-dark-blue to-brand-light-blue min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Logo */}
              <div className="mb-8">
                <img src="/lovable-uploads/1fb3e78a-ba18-46de-9a0b-ae1ca0b9a55b.png" alt="Grupo Scalco Logo" className="max-h-20 sm:max-h-24 mx-auto" />
              </div>

              <Badge className="bg-brand-yellow text-brand-dark-blue mb-6 px-4 py-2 text-sm sm:text-base font-semibold">
                +80 empresas transformadas com o GAP
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mb-6 leading-tight">
                Você paga <span className="text-brand-yellow">100%</span>.
                <br />
                Sua equipe entrega só <span className="text-red-400">75%</span>.
                <br />
                <span className="text-brand-yellow">Isso é justo?</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-brand-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Chegou o <strong>Método GAP</strong>: consultoria em gestão de pessoas + tecnologia para transformar o desempenho da sua empresa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center mb-8">
                <div className="flex items-center gap-2 text-brand-white">
                  <CheckCircle className="w-5 h-5 text-brand-yellow" />
                  <span className="font-semibold">Mais controle</span>
                </div>
                <div className="flex items-center gap-2 text-brand-white">
                  <CheckCircle className="w-5 h-5 text-brand-yellow" />
                  <span className="font-semibold">Mais entrega</span>
                </div>
                <div className="flex items-center gap-2 text-brand-white">
                  <CheckCircle className="w-5 h-5 text-brand-yellow" />
                  <span className="font-semibold">Menos desculpas</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-brand-yellow text-brand-dark-blue hover:bg-brand-yellow/90 px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300" onClick={handleWhatsAppClick}>
                Quero aplicar o Método GAP na minha empresa
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brand-white to-transparent"></div>
      </section>

      {/* Problem Section - Você cumpre sua parte */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark-blue mb-6">
                Você cumpre sua parte. E a sua equipe?
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                Você garante estrutura, pagamento e condições. E ainda precisa cobrar o óbvio?
              </p>
            </div>
            
            <div className="space-y-6 mb-12">
              <Card className="p-6 hover:shadow-xl transition-all duration-300">
                <CardContent className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark-blue mb-2">Fora do Prazo</h3>
                    <p className="text-gray-600">Tarefas entregues fora do prazo constantemente</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-xl transition-all duration-300">
                <CardContent className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <UserX className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark-blue mb-2">Sem Direcionamento</h3>
                    <p className="text-gray-600">Ninguém sabe quem faz o quê</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-xl transition-all duration-300">
                <CardContent className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark-blue mb-2">Qualidade Baixa</h3>
                    <p className="text-gray-600">Trabalhos feitos de qualquer jeito</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 mb-8 font-semibold">
                Essa é a realidade de muitas empresas com várias unidades e equipes descentralizadas.
              </p>
              
              <Button size="lg" className="bg-brand-dark-blue text-brand-white hover:bg-brand-dark-blue/90 px-8 py-4 text-lg font-semibold" onClick={handleWhatsAppClick}>
                Quero corrigir esse desequilíbrio agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O que é o GAP */}
      <section className="py-16 sm:py-20 bg-brand-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark-blue mb-6">
                O que é o Método GAP?
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
                Uma solução prática para você, gestor, voltar a ter o controle e a confiança da sua equipe.
              </p>
              
              <div className="text-center mb-12">
                <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-brand-light-blue/20 mb-4">GAP</div>
                <p className="text-lg sm:text-xl text-brand-dark-blue font-semibold">
                  Gestão de Atendimento e Performance
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-8">
                <Card className="p-6 sm:p-8 bg-gradient-to-br from-brand-dark-blue to-brand-light-blue text-brand-white">
                  <CardContent>
                    <Brain className="w-12 h-12 text-brand-yellow mb-6" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">🧠 Consultoria em gestão de pessoas</h3>
                    <p className="text-brand-white/90 leading-relaxed">
                      Especialistas que entendem o seu desafio e implementam soluções práticas na sua realidade.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="p-6 sm:p-8 bg-gradient-to-br from-brand-yellow to-yellow-400 text-brand-dark-blue">
                  <CardContent>
                    <BarChart3 className="w-12 h-12 text-brand-dark-blue mb-6" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">📊 Plataforma com indicadores de desempenho</h3>
                    <p className="text-brand-dark-blue/90 leading-relaxed">
                      Tecnologia que mostra, em tempo real, a entrega de cada colaborador, setor ou unidade.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex justify-center">
                <img src="/lovable-uploads/b95f29e5-fc7c-4242-8a89-38902343ec9f.png" alt="Gráfico mostrando a diferença entre 100% pago vs 75% entregue" className="max-w-full h-auto rounded-lg shadow-2xl" />
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-brand-dark-blue font-semibold mb-8">
                Com o GAP, você acompanha a entrega de cada colaborador, setor ou unidade – tudo em tempo real.
              </p>
              
              <Button size="lg" className="bg-brand-light-blue text-brand-white hover:bg-brand-light-blue/90 px-8 py-4 text-lg font-semibold" onClick={handleWhatsAppClick}>
                Conheça o Método GAP
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Os 3 Pilares do GAP */}
      <section id="pilares" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark-blue mb-6">
              Os 3 Pilares do GAP
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Veja como o método funciona e onde está o diferencial prático
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark-blue mb-4">1. Desconforto positivo</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quem não entrega, perde pontos. Consequências claras para baixa performance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark-blue mb-4">2. Reconhecimento</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quem entrega bem, ganha visibilidade. Valorização dos que fazem a diferença.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark-blue mb-4">3. Gestão de Conflitos</h3>
                <p className="text-gray-700 leading-relaxed">
                  Consultores com empatia e firmeza para destravar resistências.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-brand-dark-blue text-brand-white hover:bg-brand-dark-blue/90 px-8 py-4 text-lg font-semibold" onClick={handleWhatsAppClick}>
              Quero aplicar isso no meu time
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Tecnologia que te dá controle */}
      <section className="py-16 sm:py-20 bg-brand-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark-blue mb-6">
              Tecnologia que te dá o controle
            </h2>
            <p className="text-lg sm:text-xl text-brand-dark-blue font-semibold mb-8">
              Você vai enxergar, de forma clara, quem entrega, quem enrola e onde agir.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <Card className="p-6 bg-gradient-to-br from-brand-light-blue to-brand-dark-blue text-brand-white">
              <CardContent className="text-center">
                <Eye className="w-12 h-12 text-brand-yellow mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-3">Acompanhamento Total</h3>
                <p className="text-brand-white/90 text-sm">Por pessoa, tarefa e setor</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-brand-yellow to-yellow-400 text-brand-dark-blue">
              <CardContent className="text-center">
                <BarChart3 className="w-12 h-12 text-brand-dark-blue mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-3">Relatórios Automáticos</h3>
                <p className="text-brand-dark-blue/90 text-sm">Gráficos em tempo real</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-brand-dark-blue to-brand-light-blue text-brand-white">
              <CardContent className="text-center">
                <Phone className="w-12 h-12 text-brand-yellow mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-3">Acesso Total</h3>
                <p className="text-brand-white/90 text-sm">No celular e no computador</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-brand-light-blue text-brand-white hover:bg-brand-light-blue/90 px-8 py-4 text-lg font-semibold" onClick={handleWhatsAppClick}>
              Quero essa visão na minha empresa
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Consultoria com gente de verdade */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-brand-dark-blue to-brand-light-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-white mb-6">
              Consultoria com gente de verdade
            </h2>
            <p className="text-lg sm:text-xl text-brand-white/90 mb-8 leading-relaxed">
              A plataforma aponta. Nossos consultores fazem acontecer.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-12">
              <Card className="p-6 bg-brand-white/10 backdrop-blur-sm border-brand-white/20">
                <CardContent className="text-center">
                  <Users className="w-8 h-8 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-brand-white mb-2">Desenvolvimento humano</h3>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-brand-white/10 backdrop-blur-sm border-brand-white/20">
                <CardContent className="text-center">
                  <Eye className="w-8 h-8 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-brand-white mb-2">Conversas olho no olho</h3>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-brand-white/10 backdrop-blur-sm border-brand-white/20">
                <CardContent className="text-center">
                  <Shield className="w-8 h-8 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-brand-white mb-2">Apoio nos momentos difíceis</h3>
                </CardContent>
              </Card>
            </div>
            
            <Button size="lg" className="bg-brand-yellow text-brand-dark-blue hover:bg-brand-yellow/90 px-8 py-4 text-lg font-semibold" onClick={handleWhatsAppClick}>
              Quero conversar com um especialista
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Números que comprovam */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark-blue mb-6">
              Você não precisa acreditar na gente. Acredite nos números.
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Resultados reais de empresas que aplicaram o Método GAP
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
            <Card className="p-8 bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-4">+87%</div>
                <p className="text-lg font-semibold mb-2">de tarefas entregues corretamente</p>
                <p className="text-sm opacity-90">Aumento comprovado em qualidade</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-4">+92%</div>
                <p className="text-lg font-semibold mb-2">de aumento na performance geral</p>
                <p className="text-sm opacity-90">Em apenas 60 dias</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-xl font-bold text-brand-dark-blue mb-8 text-center">O que nossos clientes dizem:</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6">
                <CardContent>
                  <p className="text-gray-700 italic mb-4 leading-relaxed">
                    "A equipe passou a se responsabilizar sem eu ficar em cima."
                  </p>
                  <div className="font-semibold text-brand-dark-blue">- Cliente GAP</div>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent>
                  <p className="text-gray-700 italic mb-4 leading-relaxed">
                    "Vi quem realmente veste a camisa."
                  </p>
                  <div className="font-semibold text-brand-dark-blue">- Cliente GAP</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-brand-dark-blue text-brand-white hover:bg-brand-dark-blue/90 px-8 py-4 text-lg font-semibold" onClick={handleWhatsAppClick}>
              Quero esses resultados no meu negócio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quem usa o GAP */}
      <section className="py-16 sm:py-20 bg-brand-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark-blue mb-6">
              Quem usa o GAP
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Empresas com várias unidades já usam o GAP para escalar desempenho
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center">
            <div className="flex justify-center items-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/lovable-uploads/clientes/1753383806026_1_tasca.png" alt="Postos Tasca" className="max-h-16 sm:max-h-20 w-auto object-contain" />
            </div>
            <div className="flex justify-center items-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/lovable-uploads/clientes/1753383806793_3_hurray.jpg" alt="Rede Hurray" className="max-h-16 sm:max-h-20 w-auto object-contain" />
            </div>
            <div className="flex justify-center items-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/lovable-uploads/clientes/1753383807178_4_malerba.png" alt="Postos Malerba" className="max-h-16 sm:max-h-20 w-auto object-contain" />
            </div>
            <div className="flex justify-center items-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/lovable-uploads/clientes/marcela.png" alt="Rede Marcela" className="max-h-16 sm:max-h-20 w-auto object-contain" />
            </div>
            <div className="flex justify-center items-center p-4 grayscale hover:grayscale-0 transition-all duration-300 col-span-2 sm:col-span-3 md:col-span-1">
              <img src="/lovable-uploads/clientes/petrocal.png" alt="Postos Petrocal" className="max-h-16 sm:max-h-20 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Mas será que funciona aqui? */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark-blue mb-12 text-center">
              "Mas será que funciona aqui?"
            </h2>
            
            <div className="grid gap-6 sm:gap-8">
              <Card className="p-6 sm:p-8">
                <CardContent>
                  <h3 className="text-xl font-bold text-red-600 mb-4">"Aqui o pessoal é resistente..."</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>→ O GAP foi criado para ambientes tradicionais e difíceis.</strong> Nossos consultores têm experiência em quebrar resistências e engajar equipes desmotivadas.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 sm:p-8">
                <CardContent>
                  <h3 className="text-xl font-bold text-red-600 mb-4">"Não tenho tempo..."</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>→ A equipe Scalco cuida de toda a implementação.</strong> Você só precisa aprovar. Nossos consultores fazem todo o trabalho pesado.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 sm:p-8">
                <CardContent>
                  <h3 className="text-xl font-bold text-red-600 mb-4">"Já tentei e não deu certo..."</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>→ Consultoria + tecnologia no dia a dia é o que faz funcionar.</strong> Não é só um sistema ou só consultoria. É a combinação que gera resultados.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-brand-dark-blue to-brand-light-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-white mb-6">
              Pronto para parar de pagar 100% e receber só 75%?
            </h2>
            <p className="text-lg sm:text-xl text-brand-white/90 mb-8 leading-relaxed">
              Agende agora um diagnóstico gratuito com um de nossos especialistas.<br />
              Descubra como aplicar o GAP no seu negócio.
            </p>
            
            <Button size="lg" className="bg-brand-yellow text-brand-dark-blue hover:bg-brand-yellow/90 px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300" onClick={handleWhatsAppClick}>
              Quero meu diagnóstico gratuito
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>

            <p className="text-sm text-brand-white/80 mt-6">
              👆 Clique e fale direto com nosso especialista no WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark-blue py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="sm:col-span-2 lg:col-span-1">
                {/* Logo in footer */}
                <div className="mb-4">
                  <img src="/lovable-uploads/1fb3e78a-ba18-46de-9a0b-ae1ca0b9a55b.png" alt="Grupo Scalco Logo" className="max-h-16 w-auto" />
                </div>
                
                <p className="text-white mb-4">
                  Transformamos equipes através do Método GAP: consultoria + tecnologia.
                </p>
                <p className="text-sm text-white">
                  Responsável: Grupo Scalco
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-yellow" />
                    <span className="text-white">(51) 99971-2999</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-yellow" />
                    <span className="text-white break-all">scalco.pedro@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-yellow" />
                    <span className="text-white">Rua Bento Martins, 1294 - São Borja - RS</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Método GAP</h4>
                <ul className="space-y-2 text-white">
                  <li>Consultoria Especializada</li>
                  <li>Plataforma Tecnológica</li>
                  <li>Gestão de Performance</li>
                  <li>Resultados Garantidos</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Soluções</h4>
                <ul className="space-y-2 text-white">
                  <li>Postos de Combustíveis</li>
                  <li>Gestão de Equipes</li>
                  <li>Treinamentos</li>
                  <li>Consultoria Personalizada</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-brand-white/20 pt-8 text-center">
              <p className="text-white">
                © 2024 Grupo Scalco. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
