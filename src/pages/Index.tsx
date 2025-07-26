import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Target, 
  Award, 
  Shield, 
  TrendingUp,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Quote
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-brand-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark-blue to-brand-light-blue text-brand-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="bg-brand-yellow text-brand-dark-blue font-semibold mb-4">
                +80 empresas transformadas com o GAP
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Você paga <span className="text-brand-yellow">100%</span>.<br/>
                Sua equipe entrega só <span className="text-brand-yellow">75%</span>.<br/>
                Isso é justo?
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
                Chegou o <span className="font-bold text-brand-yellow">Método GAP</span>: consultoria em gestão de pessoas + tecnologia para transformar o desempenho da sua empresa.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-yellow" />
                  <span className="font-medium">Mais controle</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-yellow" />
                  <span className="font-medium">Mais entrega</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-yellow" />
                  <span className="font-medium">Menos desculpas</span>
                </div>
              </div>
              <Button size="lg" className="bg-brand-yellow text-brand-dark-blue hover:bg-brand-yellow/90 font-bold text-lg px-8 py-4 rounded-full">
                Quero aplicar o Método GAP na minha empresa
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Visual Chart */}
            <div className="mt-16 bg-brand-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-6">A Realidade da Sua Empresa</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Salário Pago</span>
                    <span className="font-bold text-brand-yellow">100%</span>
                  </div>
                  <Progress value={100} className="h-4 bg-brand-white/20" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Entrega Real</span>
                    <span className="font-bold text-red-300">75%</span>
                  </div>
                  <Progress value={75} className="h-4 bg-brand-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Validation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-brand-dark-blue mb-8">
              Você cumpre sua parte. E a sua equipe?
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Você garante estrutura, pagamento e condições. E ainda precisa cobrar o óbvio?
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-brand-dark-blue mb-2">Tarefas entregues fora do prazo</h3>
                  <p className="text-gray-600">Prazos ignorados e compromissos não cumpridos</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-brand-dark-blue mb-2">Ninguém sabe quem faz o quê</h3>
                  <p className="text-gray-600">Falta de clareza e responsabilidade</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-brand-dark-blue mb-2">Trabalhos feitos de qualquer jeito</h3>
                  <p className="text-gray-600">Qualidade baixa e retrabalho constante</p>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg text-gray-700 mb-8 font-medium">
              Essa é a realidade de muitas empresas com várias unidades e equipes descentralizadas.
            </p>
            
            <Button size="lg" className="bg-brand-dark-blue hover:bg-brand-dark-blue/90 text-brand-white">
              Quero corrigir esse desequilíbrio agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* What is GAP Method */}
      <section className="py-20 bg-brand-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-brand-dark-blue mb-8">
              O que é o Método GAP?
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Uma solução prática para você, gestor, voltar a ter o controle e a confiança da sua equipe.
            </p>

            {/* GAP Logo Image */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/b95f29e5-fc7c-4242-8a89-38902343ec9f.png" 
                alt="GAP - Gestão Alta Performance" 
                className="mx-auto max-w-md w-full h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => window.open('https://metodogap.com', '_blank')}
              />
            </div>

            <div className="bg-gradient-to-r from-brand-dark-blue to-brand-light-blue rounded-2xl p-8 mb-12 text-brand-white">
              <h3 className="text-2xl font-bold mb-6">Combinação única:</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <Users className="w-12 h-12 text-brand-yellow" />
                  <div className="text-left">
                    <h4 className="text-xl font-bold">Consultoria em gestão de pessoas</h4>
                    <p className="opacity-90">Especialistas que entendem do seu negócio</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <BarChart3 className="w-12 h-12 text-brand-yellow" />
                  <div className="text-left">
                    <h4 className="text-xl font-bold">Plataforma com indicadores</h4>
                    <p className="opacity-90">Tecnologia que mostra resultados reais</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-700 mb-8">
              Com o GAP, você acompanha a entrega de cada colaborador, setor ou unidade – tudo em tempo real.
            </p>

            <Button 
              size="lg" 
              className="bg-brand-light-blue hover:bg-brand-light-blue/90 text-brand-white"
              onClick={() => window.open('https://metodogap.com', '_blank')}
            >
              Conheça o Método GAP
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-brand-dark-blue mb-16">
              Os 3 Pilares do GAP
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-t-4 border-t-brand-yellow">
                <CardContent className="p-8">
                  <Target className="w-16 h-16 text-brand-dark-blue mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-brand-dark-blue mb-4">Desconforto positivo</h3>
                  <p className="text-gray-700">
                    Quem não entrega, perde pontos. Sistema transparente que mostra performance real.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-t-4 border-t-brand-yellow">
                <CardContent className="p-8">
                  <Award className="w-16 h-16 text-brand-dark-blue mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-brand-dark-blue mb-4">Reconhecimento</h3>
                  <p className="text-gray-700">
                    Quem entrega bem, ganha visibilidade. Meritocracia real e motivação constante.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-t-4 border-t-brand-yellow">
                <CardContent className="p-8">
                  <MessageSquare className="w-16 h-16 text-brand-dark-blue mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-brand-dark-blue mb-4">Gestão de Conflitos</h3>
                  <p className="text-gray-700">
                    Consultores com empatia e firmeza para destravar resistências.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-brand-dark-blue hover:bg-brand-dark-blue/90 text-brand-white">
                Quero aplicar isso no meu time
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Control */}
      <section className="py-20 bg-brand-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-brand-dark-blue mb-8">
                  Tecnologia que te dá o controle
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-brand-yellow mt-1" />
                    <div>
                      <h3 className="font-bold text-brand-dark-blue">Acompanhamento por pessoa, tarefa e setor</h3>
                      <p className="text-gray-700">Visão completa de toda a operação</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-brand-yellow mt-1" />
                    <div>
                      <h3 className="font-bold text-brand-dark-blue">Relatórios automáticos e gráficos em tempo real</h3>
                      <p className="text-gray-700">Dados sempre atualizados na sua mão</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-brand-yellow mt-1" />
                    <div>
                      <h3 className="font-bold text-brand-dark-blue">Funciona no celular e no computador</h3>
                      <p className="text-gray-700">Acesse de qualquer lugar, a qualquer hora</p>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-yellow/20 border-l-4 border-l-brand-yellow p-6 my-8">
                  <p className="text-lg font-bold text-brand-dark-blue">
                    "Você vai enxergar, de forma clara, quem entrega, quem enrola e onde agir."
                  </p>
                </div>

                <Button size="lg" className="bg-brand-light-blue hover:bg-brand-light-blue/90 text-brand-white">
                  Quero essa visão na minha empresa
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="bg-gradient-to-br from-brand-dark-blue to-brand-light-blue p-8 rounded-2xl text-brand-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Dashboard GAP</h3>
                <div className="space-y-4">
                  <div className="bg-brand-white/20 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span>João Silva - Vendas</span>
                      <span className="text-brand-yellow font-bold">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div className="bg-brand-white/20 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span>Maria Santos - Marketing</span>
                      <span className="text-brand-yellow font-bold">87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                  <div className="bg-brand-white/20 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span>Pedro Costa - Operações</span>
                      <span className="text-red-300 font-bold">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real People Consulting */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-brand-dark-blue mb-8">
              Consultoria com gente de verdade
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              A plataforma aponta. Nossos consultores fazem acontecer.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Users className="w-16 h-16 text-brand-light-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brand-dark-blue mb-2">Desenvolvimento humano</h3>
                <p className="text-gray-700">Pessoas especializadas em transformar equipes</p>
              </div>
              <div className="text-center">
                <MessageSquare className="w-16 h-16 text-brand-light-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brand-dark-blue mb-2">Conversas olho no olho</h3>
                <p className="text-gray-700">Relacionamento próximo e humanizado</p>
              </div>
              <div className="text-center">
                <Shield className="w-16 h-16 text-brand-light-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brand-dark-blue mb-2">Apoio nos momentos difíceis</h3>
                <p className="text-gray-700">Suporte quando você mais precisa</p>
              </div>
            </div>

            <Button size="lg" className="bg-brand-dark-blue hover:bg-brand-dark-blue/90 text-brand-white">
              Quero conversar com um especialista
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-20 bg-brand-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-brand-dark-blue mb-8">
              Você não precisa acreditar na gente. Acredite nos números.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gradient-to-r from-brand-dark-blue to-brand-light-blue text-brand-white">
                <CardContent className="p-8 text-center">
                  <TrendingUp className="w-16 h-16 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-brand-yellow mb-2">+87%</h3>
                  <p className="text-xl">de tarefas entregues corretamente</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-brand-light-blue to-brand-dark-blue text-brand-white">
                <CardContent className="p-8 text-center">
                  <BarChart3 className="w-16 h-16 text-brand-yellow mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-brand-yellow mb-2">+92%</h3>
                  <p className="text-xl">de aumento na performance em 60 dias</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-brand-dark-blue hover:bg-brand-dark-blue/90 text-brand-white">
                Quero esses resultados no meu negócio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-brand-dark-blue mb-8">
              O que nossos clientes falam
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Depoimentos reais de empresários que transformaram seus negócios com o Método GAP
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-l-4 border-l-brand-yellow hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-brand-yellow mb-4" />
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "Antes da Scalco, a gestão de pessoas era muito fraca — não havia uma forma precisa de medir o desempenho de cada colaborador. Eu já trabalhava com loja há 13 anos, e justamente no ano em que a Scalco entrou, fomos campeões nacionais, concorrendo com 365 lojas."
                  </blockquote>
                  <cite className="text-brand-dark-blue font-semibold">- Antero Vieira, Postos Tasca</cite>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-brand-yellow hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-brand-yellow mb-4" />
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "Antes da Scalco, a gente 'achava' muito... O primeiro impacto foi a união da equipe — algo que a gente nem esperava. A gente não tinha gerentes antes... depois que implantamos a Scalco, formamos gerentes."
                  </blockquote>
                  <cite className="text-brand-dark-blue font-semibold">- Maurício Januzzi, Postos Malerba</cite>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-brand-yellow hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-brand-yellow mb-4" />
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "Depois da chegada da consultoria, veio um boom geral: metas, as vendas alavancaram, o atendimento melhorou... Tinha posto vendendo R$ 10.000,00 em mix automotivo, e depois saltou pra R$ 25.000,00 – R$ 30.000,00. O resultado veio rápido."
                  </blockquote>
                  <cite className="text-brand-dark-blue font-semibold">- Thiago Perin, Rede Marcela</cite>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-brand-yellow hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-brand-yellow mb-4" />
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "Depois que a Scalco chegou, a gente conseguiu sair do 'achômetro' e passar a ter certezas — e crescer com esse trabalho."
                  </blockquote>
                  <cite className="text-brand-dark-blue font-semibold">- Camila Maluf, Postos Tasca</cite>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-brand-yellow hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-brand-yellow mb-4" />
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "Os elogios começaram a aparecer, e o pessoal não estava muito acostumado com isso... E aí a satisfação começou a trazer resultado — e isso deixou a gente mais confiante no nosso trabalho."
                  </blockquote>
                  <cite className="text-brand-dark-blue font-semibold">- Marcelo Oliveira, Rede Hurray</cite>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-brand-yellow hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-brand-yellow mb-4" />
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "Nós tínhamos um conjunto de processos próprios, mas não medíamos com a frequência e o método GAP nos trouxe precisão."
                  </blockquote>
                  <cite className="text-brand-dark-blue font-semibold">- Wellington Granja, Postos Petrocal</cite>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-brand-dark-blue hover:bg-brand-dark-blue/90 text-brand-white">
                Quero resultados como esses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-brand-dark-blue mb-8">
              Clientes que confiam no GAP
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Empresas de diversos segmentos já transformaram suas equipes com o Método GAP
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/clientes/1753383806026_1_tasca.png" 
                  alt="Tasca"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/clientes/1753383806793_3_hurray.jpg" 
                  alt="Hurray"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/clientes/1753383807178_4_malerba.png" 
                  alt="Malerba"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/clientes/marcela.png" 
                  alt="Marcela"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/clientes/petrocal.png" 
                  alt="Petrocal"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-700 mb-8">
                Junte-se a essas empresas e transforme a performance da sua equipe
              </p>
              <Button size="lg" className="bg-brand-dark-blue hover:bg-brand-dark-blue/90 text-brand-white">
                Quero ser o próximo cliente
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who Uses GAP */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-brand-dark-blue mb-8">
              Quem usa o GAP
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Empresas com várias unidades já usam o GAP para escalar desempenho.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-brand-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-white">S</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark-blue">Supermercados</h3>
                  <p className="text-gray-600">Múltiplas filiais e equipes grandes</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-brand-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-white">P</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark-blue">Postos de Combustível</h3>
                  <p className="text-gray-600">Operação 24/7 descentralizada</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-brand-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-white">L</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark-blue">Redes de Lojas</h3>
                  <p className="text-gray-600">Franquias e filiais espalhadas</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Objections */}
      <section className="py-20 bg-brand-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-brand-dark-blue mb-12">
              "Mas será que funciona aqui?"
            </h2>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-l-brand-yellow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-brand-dark-blue mb-2">"Aqui o pessoal é resistente..."</h3>
                  <p className="text-gray-700">→ O GAP foi criado exatamente para ambientes tradicionais e difíceis. Nossa especialidade é quebrar resistências.</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-brand-yellow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-brand-dark-blue mb-2">"Não tenho tempo..."</h3>
                  <p className="text-gray-700">→ A equipe Scalco cuida de toda a implementação. Você só acompanha os resultados.</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-brand-yellow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-brand-dark-blue mb-2">"Já tentei e não deu certo..."</h3>
                  <p className="text-gray-700">→ Consultoria + tecnologia no dia a dia é o que faz a diferença. Não é só ferramenta, é transformação.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-dark-blue to-brand-light-blue text-brand-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Pronto para parar de pagar 100% e receber só 75%?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Agende agora um diagnóstico gratuito com um de nossos especialistas. 
              Descubra como aplicar o GAP no seu negócio.
            </p>
            
            <Button size="lg" className="bg-brand-yellow text-brand-dark-blue hover:bg-brand-yellow/90 font-bold text-xl px-12 py-6 rounded-full">
              Quero meu diagnóstico gratuito
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark-blue text-brand-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-yellow mb-4">Scalco Consultoria</h3>
                <p className="text-brand-white/80 mb-4">
                  Transformamos equipes através do Método GAP: consultoria + tecnologia.
                </p>
                <p className="text-sm text-brand-white/60">
                  CNPJ: 00.000.000/0001-00
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Contato</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-yellow" />
                    <span className="text-brand-white/80">(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-yellow" />
                    <span className="text-brand-white/80">contato@scalco.com.br</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-yellow" />
                    <span className="text-brand-white/80">São Paulo, SP</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Método GAP</h4>
                <ul className="space-y-2 text-brand-white/80">
                  <li>Como funciona</li>
                  <li>Casos de sucesso</li>
                  <li>Diagnóstico gratuito</li>
                  <li>Consultoria</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-brand-white/80">
                  <li>Termos de Uso</li>
                  <li>Política de Privacidade</li>
                  <li>Contato</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-brand-white/20 pt-8 text-center">
              <p className="text-brand-white/60">
                © 2024 Scalco Consultoria. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
