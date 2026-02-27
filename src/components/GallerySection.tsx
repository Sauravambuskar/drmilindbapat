import { motion } from "framer-motion";

const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.png",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpg",
  "/images/gallery-9.jpg",
  "/images/gallery-10.jpg",
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
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {images.map((src, i) => (
            <motion.div
              key={src}
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
                src={src}
                alt={`Clinic gallery image ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 min-h-[160px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
