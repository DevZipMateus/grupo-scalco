
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  TrendingUp, 
  Target, 
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  BarChart3,
  Zap,
  Shield
} from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-dark-blue to-brand-light-blue min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Badge className="bg-brand-yellow text-brand-dark-blue mb-6 px-4 py-2 text-sm sm:text-base">
                Método GAP: Consultoria + Tecnologia
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mb-6 leading-tight">
                Transforme Sua Equipe com o 
                <span className="text-brand-yellow block mt-2">Método GAP</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-brand-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Consultoria especializada + plataforma tecnológica que revoluciona a gestão de pessoas em postos de combustíveis
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-brand-yellow text-brand-dark-blue hover:bg-brand-yellow/90 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
                  onClick={() => scrollToSection('contato')}
                >
                  Quero Conhecer o Método GAP
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-dark-blue px-8 py-4 text-lg w-full sm:w-auto"
                  onClick={() => scrollToSection('resultados')}
                >
                  Ver Resultados
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brand-white to-transparent"></div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark-blue mb-6">
              O Problema que Todo Gestor Enfrenta
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Você sabe exatamente onde sua equipe está falhando? Consegue medir o desempenho de cada colaborador de forma precisa?
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-brand-dark-blue mb-3">Falta de Precisão</h3>
                <p className="text-gray-600">
                  Decisões baseadas no "achômetro" ao invés de dados concretos
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-brand-dark-blue mb-3">Equipe Desmotivada</h3>
                <p className="text-gray-600">
                  Colaboradores sem direcionamento claro e metas definidas
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-brand-dark-blue mb-3">Baixa Performance</h3>
                <p className="text-gray-600">
                  Resultados abaixo do potencial por falta de gestão eficaz
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Method GAP Section */}
      <section className="py-16 sm:py-20 bg-brand-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark-blue mb-6">
              A Solução: Método GAP
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Uma metodologia revolucionária que combina consultoria especializada com tecnologia avançada
            </p>
            
            <div className="text-center mb-12">
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-brand-light-blue/20 mb-4">GAP</div>
              <p className="text-lg sm:text-xl text-brand-dark-blue font-semibold">
                Gestão de Atendimento e Performance
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8 bg-gradient-to-br from-brand-dark-blue to-brand-light-blue text-brand-white">
              <CardContent>
                <Zap className="w-12 h-12 text-brand-yellow mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Consultoria Especializada</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-yellow mt-0.5 flex-shrink-0" />
                    <span>Análise detalhada do negócio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-yellow mt-0.5 flex-shrink-0" />
                    <span>Implementação de processos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-yellow mt-0.5 flex-shrink-0" />
                    <span>Treinamento da equipe</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-6 sm:p-8 bg-gradient-to-br from-brand-light-blue to-brand-dark-blue text-brand-white">
              <CardContent>
                <BarChart3 className="w-12 h-12 text-brand-yellow mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Plataforma Tecnológica</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-yellow mt-0.5 flex-shrink-0" />
                    <span>Monitoramento em tempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-yellow mt-0.5 flex-shrink-0" />
                    <span>Dashboards intuitivos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-yellow mt-0.5 flex-shrink-0" />
                    <span>Relatórios automáticos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-6 sm:p-8 bg-gradient-to-br from-brand-yellow to-yellow-400 text-brand-dark-blue">
              <CardContent>
                <Shield className="w-12 h-12 text-brand-dark-blue mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Resultados Garantidos</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-dark-blue mt-0.5 flex-shrink-0" />
                    <span>Aumento de vendas comprovado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-dark-blue mt-0.5 flex-shrink-0" />
                    <span>Equipe mais engajada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-dark-blue mt-0.5 flex-shrink-0" />
                    <span>Gestão baseada em dados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section id="resultados" className="py-16 sm:py-20 bg-gradient-to-r from-brand-dark-blue to-brand-light-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-white mb-6">
              Números que Comprovam a Eficácia
            </h2>
            <p className="text-lg sm:text-xl text-brand-white/90 leading-relaxed">
              Resultados reais de clientes que transformaram seus negócios com o Método GAP
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8 bg-brand-white/10 backdrop-blur-sm border-brand-white/20">
              <CardContent className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-yellow mb-2">150%</div>
                <p className="text-brand-white font-semibold mb-2">Aumento em Mix Automotivo</p>
                <p className="text-sm text-brand-white/80">De R$ 10k para R$ 25k-30k</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 sm:p-8 bg-brand-white/10 backdrop-blur-sm border-brand-white/20">
              <CardContent className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-yellow mb-2">365</div>
                <p className="text-brand-white font-semibold mb-2">Lojas Concorrentes</p>
                <p className="text-sm text-brand-white/80">Cliente campeão nacional</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 sm:p-8 bg-brand-white/10 backdrop-blur-sm border-brand-white/20">
              <CardContent className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-yellow mb-2">100%</div>
                <p className="text-brand-white font-semibold mb-2">Engajamento da Equipe</p>
                <p className="text-sm text-brand-white/80">União e motivação máxima</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 sm:p-8 bg-brand-white/10 backdrop-blur-sm border-brand-white/20">
              <CardContent className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-yellow mb-2">13</div>
                <p className="text-brand-white font-semibold mb-2">Anos de Experiência</p>
                <p className="text-sm text-brand-white/80">Do cliente antes do GAP</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark-blue mb-6">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Depoimentos reais de empresários que transformaram seus negócios
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8">
            {/* First row - 2 testimonials */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <CardContent>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "Antes da Scalco, a gestão de pessoas era muito fraca — não havia uma forma precisa de medir o desempenho de cada colaborador. Eu já trabalhava com loja há 13 anos, e justamente no ano em que a Scalco entrou, fomos campeões nacionais, concorrendo com 365 lojas."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-light-blue rounded-full flex items-center justify-center">
                      <span className="text-brand-white font-semibold text-lg">AV</span>
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark-blue">Antero Vieira</div>
                      <div className="text-sm text-gray-600">Postos Tasca</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <CardContent>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "Antes da Scalco, a gente 'achava' muito... O primeiro impacto foi a união da equipe — algo que a gente nem esperava. A gente não tinha gerentes antes... depois que implantamos a Scalco, formamos gerentes."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-light-blue rounded-full flex items-center justify-center">
                      <span className="text-brand-white font-semibold text-lg">MJ</span>
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark-blue">Maurício Januzzi</div>
                      <div className="text-sm text-gray-600">Postos Malerba</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Second row - 2 testimonials */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <CardContent>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "Depois da chegada da consultoria, veio um boom geral: metas, as vendas alavancaram, o atendimento melhorou... Tinha posto vendendo R$ 10.000,00 em mix automotivo, e depois saltou pra R$ 25.000,00 – R$ 30.000,00."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-light-blue rounded-full flex items-center justify-center">
                      <span className="text-brand-white font-semibold text-lg">TP</span>
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark-blue">Thiago Perin</div>
                      <div className="text-sm text-gray-600">Rede Marcela</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <CardContent>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "Depois que a Scalco chegou, a gente conseguiu sair do 'achômetro' e passar a ter certezas — e crescer com esse trabalho."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-light-blue rounded-full flex items-center justify-center">
                      <span className="text-brand-white font-semibold text-lg">CM</span>
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark-blue">Camila Maluf</div>
                      <div className="text-sm text-gray-600">Postos Tasca</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Third row - 2 testimonials */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <CardContent>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "Os elogios começaram a aparecer, e o pessoal não estava muito acostumado com isso... E aí a satisfação começou a trazer resultado — e isso deixou a gente mais confiante no nosso trabalho."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-light-blue rounded-full flex items-center justify-center">
                      <span className="text-brand-white font-semibold text-lg">MO</span>
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark-blue">Marcelo Oliveira</div>
                      <div className="text-sm text-gray-600">Rede Hurray</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <CardContent>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "Nós tínhamos um conjunto de processos próprios, mas não medíamos com a frequência e o método GAP nos trouxe precisão."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-light-blue rounded-full flex items-center justify-center">
                      <span className="text-brand-white font-semibold text-lg">WG</span>
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark-blue">Wellington Granja</div>
                      <div className="text-sm text-gray-600">Postos Petrocal</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 sm:py-20 bg-brand-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark-blue mb-6">
              Clientes que Confiam no Método GAP
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Empresas que já transformaram seus resultados conosco
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center">
            <div className="flex justify-center items-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src="/lovable-uploads/clientes/1753383806026_1_tasca.png" 
                alt="Postos Tasca" 
                className="max-h-16 sm:max-h-20 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center items-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src="/lovable-uploads/clientes/1753383806793_3_hurray.jpg" 
                alt="Rede Hurray" 
                className="max-h-16 sm:max-h-20 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center items-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src="/lovable-uploads/clientes/1753383807178_4_malerba.png" 
                alt="Postos Malerba" 
                className="max-h-16 sm:max-h-20 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center items-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src="/lovable-uploads/clientes/marcela.png" 
                alt="Rede Marcela" 
                className="max-h-16 sm:max-h-20 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center items-center p-4 grayscale hover:grayscale-0 transition-all duration-300 col-span-2 sm:col-span-3 md:col-span-1">
              <img 
                src="/lovable-uploads/clientes/petrocal.png" 
                alt="Postos Petrocal" 
                className="max-h-16 sm:max-h-20 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-16 sm:py-20 bg-gradient-to-r from-brand-dark-blue to-brand-light-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-white mb-6">
              Pronto para Transformar Seus Resultados?
            </h2>
            <p className="text-lg sm:text-xl text-brand-white/90 mb-8 leading-relaxed">
              Entre em contato conosco e descubra como o Método GAP pode revolucionar sua gestão
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              <Card className="p-6 bg-brand-white/10 backdrop-blur-sm border-brand-white/20">
                <CardContent className="text-center">
                  <Phone className="w-8 h-8 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-brand-white mb-2">Telefone</h3>
                  <p className="text-brand-white/80">(51) 99971-2999</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-brand-white/10 backdrop-blur-sm border-brand-white/20">
                <CardContent className="text-center">
                  <Mail className="w-8 h-8 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-brand-white mb-2">E-mail</h3>
                  <p className="text-brand-white/80 break-all">scalco.pedro@gmail.com</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-brand-white/10 backdrop-blur-sm border-brand-white/20 sm:col-span-2 lg:col-span-1">
                <CardContent className="text-center">
                  <MapPin className="w-8 h-8 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-brand-white mb-2">Endereço</h3>
                  <p className="text-brand-white/80 text-sm">Rua Bento Martins, 1294<br/>São Borja - RS</p>
                </CardContent>
              </Card>
            </div>
            
            <Button 
              size="lg" 
              className="bg-brand-yellow text-brand-dark-blue hover:bg-brand-yellow/90 px-8 py-4 text-lg font-semibold"
            >
              Falar com Especialista
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark-blue py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="sm:col-span-2 lg:col-span-1">
                <h3 className="text-2xl font-bold text-brand-yellow mb-4">Grupo Scalco</h3>
                <p className="text-brand-white/80 mb-4">
                  Transformamos equipes através do Método GAP: consultoria + tecnologia.
                </p>
                <p className="text-sm text-brand-white/60">
                  Responsável: Grupo Scalco
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-brand-white mb-4">Contato</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-yellow" />
                    <span className="text-brand-white/80">(51) 99971-2999</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-yellow" />
                    <span className="text-brand-white/80 break-all">scalco.pedro@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-yellow" />
                    <span className="text-brand-white/80">Rua Bento Martins, 1294 - São Borja - RS</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-brand-white mb-4">Método GAP</h4>
                <ul className="space-y-2 text-brand-white/80">
                  <li>Consultoria Especializada</li>
                  <li>Plataforma Tecnológica</li>
                  <li>Gestão de Performance</li>
                  <li>Resultados Garantidos</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-brand-white mb-4">Soluções</h4>
                <ul className="space-y-2 text-brand-white/80">
                  <li>Postos de Combustíveis</li>
                  <li>Gestão de Equipes</li>
                  <li>Treinamentos</li>
                  <li>Consultoria Personalizada</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-brand-white/20 pt-8 text-center">
              <p className="text-brand-white/60">
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
