import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { OptimizedImage } from "./OptimizedImage";
import "./TestimonialCarousel.css";

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

const TestimonialCarousel = () => {
  const plugin = useRef(Autoplay({
    delay: 4000,
    stopOnInteraction: true
  }));

  return (
    <div className="w-full max-w-5xl mx-auto testimonial-carousel">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 flex-grow leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                      <OptimizedImage
                        src={testimonial.image}
                        alt={`${testimonial.name} - ${testimonial.company}`}
                        className="w-full h-full object-cover"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark-blue text-sm sm:text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;