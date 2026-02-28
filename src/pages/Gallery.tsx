import destSantorini from "@/assets/destination-santorini.jpg";
import destBali from "@/assets/destination-bali.jpg";
import destDubai from "@/assets/destination-dubai.jpg";
import destMaldives from "@/assets/destination-maldives.jpg";
import destSwitzerland from "@/assets/destination-switzerland.jpg";
import heroCruise from "@/assets/hero-cruise.jpg";
import heroBeach from "@/assets/hero-beach.jpg";
import cruiseInterior from "@/assets/cruise-interior.jpg";

const images = [
  { src: destSantorini, alt: "Santorini, Greece", span: "col-span-1 row-span-2" },
  { src: heroCruise, alt: "Luxury Cruise", span: "col-span-1 row-span-1" },
  { src: destBali, alt: "Bali Rice Terraces", span: "col-span-1 row-span-1" },
  { src: destDubai, alt: "Dubai Skyline", span: "col-span-1 row-span-2" },
  { src: cruiseInterior, alt: "Cruise Interior", span: "col-span-1 row-span-1" },
  { src: destMaldives, alt: "Maldives Paradise", span: "col-span-1 row-span-1" },
  { src: heroBeach, alt: "Tropical Beach", span: "col-span-1 row-span-2" },
  { src: destSwitzerland, alt: "Swiss Alps", span: "col-span-1 row-span-1" },
];

const Gallery = () => {
  return (
    <div>
      <section className="relative h-72 md:h-96 flex items-center justify-center">
        <img src={destSantorini} alt="Gallery" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 text-center animate-fade-slide">
          <p className="text-secondary font-heading text-sm uppercase tracking-[0.3em] mb-2">Memories</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground">Gallery</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {images.map((img, i) => (
              <div key={i} className={`${img.span} relative rounded-xl overflow-hidden group cursor-pointer`}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex items-center justify-center">
                  <p className="font-heading font-semibold text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
