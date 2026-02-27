import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/components/BlogSection";

const WHATSAPP_LINK = "https://wa.me/919822032496?text=Hello%20Dr.%20Bapat%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20share%20available%20slots.";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20 py-32 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20" />

      <article className="py-12 lg:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 text-primary text-sm font-medium mb-8 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-4">
              {post.category}
            </span>

            <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="rounded-2xl overflow-hidden my-8 aspect-[2/1]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              <span>By Dr. Milind Bapat</span>
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h2 key={i} className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  return (
                    <ul key={i} className="space-y-2 my-4">
                      {paragraph.split("\n").map((item, j) => (
                        <li key={j} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: item.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (/^\d+\./.test(paragraph)) {
                  return (
                    <ol key={i} className="space-y-2 my-4">
                      {paragraph.split("\n").map((item, j) => (
                        <li key={j} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                          <span className="font-semibold text-primary shrink-0">{j + 1}.</span>
                          <span dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
                        </li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed my-4"
                    dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground font-semibold'>$1</strong>") }}
                  />
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-accent rounded-2xl text-center">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Have Questions? Book a Consultation
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Dr. Milind Bapat is available for consultations at TARA Clinic & Jupiter Hospital, Pune.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.id}
                to={`/blog/${rp.id}`}
                className="bg-card rounded-xl p-5 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow"
              >
                <span className="text-xs text-primary font-medium">{rp.category}</span>
                <h4 className="font-display font-semibold text-foreground mt-1 mb-2 line-clamp-2">{rp.title}</h4>
                <p className="text-xs text-muted-foreground">{rp.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
