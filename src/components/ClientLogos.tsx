import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { OptimizedImage } from "./OptimizedImage";

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

const ClientLogos = () => {
  const logoPlugin = useRef(Autoplay({
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    stopOnFocusIn: false
  }));

  return (
    <div className="w-full">
      <Carousel
        plugins={[logoPlugin.current]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {clientLogos.map((logo) => (
            <CarouselItem key={logo.id} className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
              <div className="flex aspect-square items-center justify-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <OptimizedImage
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  width={120}
                  height={80}
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 180px"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ClientLogos;