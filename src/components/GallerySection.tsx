import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (selected === null) return;
    setSelected((selected + dir + images.length) % images.length);
  };

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
              onClick={() => setSelected(i)}
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

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2"
              aria-label="Close"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 text-white/80 hover:text-white z-10 p-2"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 text-white/80 hover:text-white z-10 p-2"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.img
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <p className="absolute bottom-6 text-white/70 text-sm text-center">
              {images[selected].alt} — {selected + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
