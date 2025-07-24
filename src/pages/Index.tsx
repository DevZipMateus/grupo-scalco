
import React from 'react';
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
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Método GAP e como ele pode transformar a gestão da minha equipe.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

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
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Fale Conosco
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2">
                🚀 MÉTODO COMPROVADO
              </Badge>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Você paga <span className="text-orange-400">100%</span>, mas sua equipe entrega só <span className="text-brand-red">75%</span>?
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                O <strong>Método GAP</strong> corrige esse desequilíbrio e faz sua equipe entregar o que precisa ser feito, do jeito certo e na hora certa.
              </p>
              <Button 
                onClick={openWhatsApp}
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
              >
                <Rocket className="w-5 h-5 mr-3" />
                Quero transformar minha equipe
              </Button>
            </div>
            <div className="flex justify-center">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Você paga:</span>
                      <Badge className="bg-green-500 text-white px-4 py-2 text-lg">100%</Badge>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-4">
                      <div className="bg-green-500 h-4 rounded-full w-full"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Equipe entrega:</span>
                      <Badge className="bg-red-500 text-white px-4 py-2 text-lg">75%</Badge>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-4">
                      <div className="bg-red-500 h-4 rounded-full w-3/4"></div>
                    </div>
                    <div className="text-center pt-4 border-t border-white/20">
                      <p className="text-orange-300 font-semibold">Isso é justo?</p>
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
              Você está cumprindo sua parte. E a sua equipe?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Tarefas que não são concluídas. Projetos feitos de qualquer jeito. Prazos que não são cumpridos. 
              Enquanto isso, você continua pagando salários integrais por resultados parciais.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-red-800 mb-4">A Realidade Atual:</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        Tarefas incompletas ou mal executadas
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        Falta de clareza sobre quem fez o quê
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        Equipe desmotivada e sem direcionamento
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        Decisões baseadas em "achismos"
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <p className="text-3xl font-bold text-red-600 mb-2">25%</p>
                      <p className="text-gray-600">do seu investimento está sendo desperdiçado</p>
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
            <Badge className="mb-4 bg-brand-secondary text-white px-4 py-2">SOLUÇÃO DEFINITIVA</Badge>
            <h2 className="text-4xl font-bold text-brand-primary mb-6">
              O Método GAP corrige esse desequilíbrio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma combinação única de <strong>consultoria especializada</strong> e <strong>tecnologia avançada</strong> 
              que faz sua equipe entregar o que precisa ser feito, do jeito certo e na hora certa.
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
                    <h4 className="text-xl font-semibold mb-2">Consultoria Especializada</h4>
                    <p className="text-gray-600">Especialistas que lidam com gente, desenvolvendo o potencial da sua equipe</p>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-brand-primary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Tecnologia Inteligente</h4>
                    <p className="text-gray-600">Plataforma que coloca você no controle total da gestão da sua equipe</p>
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
              Três pilares. Um método que transforma.
            </h2>
            <p className="text-xl text-gray-600">
              A base do Método GAP está em três pilares comportamentais:
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-center text-red-600">Desconforto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Criar o desconforto necessário para que sua equipe saia da zona de conforto e busque a excelência.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-center text-green-600">Reconhecimento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Sistema de reconhecimento baseado em mérito e resultados concretos, não em favoritismo.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
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
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Rotina Gamificada</h3>
                <p className="text-purple-700">
                  Transformamos o dia a dia da sua equipe em um jogo, com acompanhamento em tempo real 
                  e resultados mensuráveis que motivam e engajam.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="plataforma" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-brand-primary text-white px-4 py-2">TECNOLOGIA AVANÇADA</Badge>
              <h2 className="text-4xl font-bold text-brand-primary mb-6">
                Tecnologia que coloca você no controle
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nossa plataforma mostra em tempo real quem fez e quem não fez suas tarefas, 
                com relatórios detalhados, gráficos intuitivos e indicadores de performance.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Acesso via celular ou computador</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Interface simples e intuitiva</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Relatórios automáticos e personalizados</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Acompanhamento remoto completo</span>
                </div>
              </div>
              <Button 
                onClick={openWhatsApp}
                className="bg-brand-primary hover:bg-brand-secondary text-white"
              >
                Ver demonstração da plataforma
              </Button>
            </div>
            <div>
              <Card className="bg-white shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-center text-brand-primary">Dashboard - Método GAP</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <span className="font-medium">Tarefas Concluídas</span>
                      <Badge className="bg-green-600 text-white">87%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="font-medium">Performance Geral</span>
                      <Badge className="bg-brand-secondary text-white">92%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                      <span className="font-medium">Engajamento</span>
                      <Badge className="bg-purple-600 text-white">95%</Badge>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 text-center">
                        Dados atualizados em tempo real
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
              Especialistas que lidam com gente, não só com números
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossos consultores Scalco são especialistas em desenvolver o potencial das equipes, 
              resolvendo resistências e transformando comportamentos.
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
                    <h4 className="text-xl font-semibold mb-4 text-blue-200">O que fazemos:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                        <span>Desenvolvimento de potencial individual</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                        <span>Resolução de resistências comportamentais</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                        <span>Alinhamento de expectativas e metas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                        <span>Criação de cultura de alta performance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-4 text-orange-300">A verdade é:</h4>
                    <p className="text-lg italic">
                      "Seus colaboradores podem muito mais do que entregam hoje. 
                      Eles só precisam do direcionamento e da motivação certos."
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
              Você não precisa acreditar na gente. Acredite nos números.
            </h2>
            <p className="text-xl text-gray-600">
              A partir da primeira semana, você verá resultados concretos:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BarChart3 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-brand-primary mb-2">Setores que mais entregam</h3>
                <p className="text-gray-600 text-sm">Identifique quais áreas estão performando melhor</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-brand-primary mb-2">Quem veste a camisa</h3>
                <p className="text-gray-600 text-sm">Descubra seus verdadeiros talentos e potenciais</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-brand-primary mb-2">Gargalos identificados</h3>
                <p className="text-gray-600 text-sm">Encontre e elimine os pontos de travamento</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-brand-primary mb-2">Decisões mais justas</h3>
                <p className="text-gray-600 text-sm">Base sólida de dados para escolhas acertadas</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="bg-green-600 text-white max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Dados concretos para decisões melhores</h3>
                <p className="text-green-100 text-lg">
                  Pare de tomar decisões baseadas em "achismos". 
                  Tenha informações precisas sobre sua equipe em tempo real.
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
              Pronto para parar de pagar por 100% e receber só 75%?
            </h2>
            <p className="text-2xl mb-12 text-orange-100">
              O Método GAP está pronto para transformar sua gestão. 
              <br />Fale conosco agora e veja como podemos ajudar sua empresa.
            </p>
            <Button 
              onClick={openWhatsApp}
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold mb-8"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Quero aplicar o Método GAP na minha empresa
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
            <p className="text-slate-400 mb-6">Método GAP - Gestão para Alta Performance</p>
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
