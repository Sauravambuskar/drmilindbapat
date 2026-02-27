import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anil Patil",
    text: "Dr. Milind Bapat is the best Urologist in Pune. He gives a patient hearing, explains the condition and discusses options with patients and relatives. A pretty rare quality found among doctors these days.",
  },
  {
    name: "Sanjay Deshmukh",
    text: "Dr. Milind Bapat Sir is one of the best urologists in Pune. Accurate diagnosis, listens to you patiently, explains every minute aspect of your problem, even responds online. Operation was successful. Highly recommended.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2">
            What Our Patients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] relative"
            >
              <Quote className="w-10 h-10 text-primary/15 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">{t.name[0]}</span>
                </div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
