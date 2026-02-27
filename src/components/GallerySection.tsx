import { motion } from "framer-motion";

const images = [
  { src: "/images/gallery-1.jpg", alt: "Dr. Milind Bapat's urology clinic reception area" },
  { src: "/images/gallery-2.png", alt: "Advanced urology diagnostic equipment" },
  { src: "/images/gallery-3.jpg", alt: "Consultation room at TARA Clinic" },
  { src: "/images/gallery-4.jpg", alt: "Modern surgical operation theatre" },
  { src: "/images/gallery-5.jpg", alt: "Patient care and recovery area" },
  { src: "/images/gallery-6.jpg", alt: "Dr. Bapat with medical team at clinic" },
  { src: "/images/gallery-7.jpg", alt: "Laser lithotripsy equipment for kidney stones" },
  { src: "/images/gallery-8.jpg", alt: "Jupiter Hospital urology department" },
  { src: "/images/gallery-9.jpg", alt: "Medical conference and continuing education" },
  { src: "/images/gallery-10.jpg", alt: "Dr. Bapat performing minimally invasive procedure" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Our Clinic & Practice
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Take a virtual tour of our modern facilities, advanced equipment, and comfortable patient environment at TARA Clinic and Jupiter Hospital, Pune.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className={`rounded-xl overflow-hidden group cursor-pointer relative ${
                i === 0 ? "md:col-span-2 md:row-span-2" : 
                i === 5 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 min-h-[160px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300 flex items-end">
                <p className="text-primary-foreground text-xs font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
