import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Style Sterling Silver for Any Occasion',
    excerpt: 'Discover the art of accessorizing with sterling silver, from casual daywear to elegant evening looks.',
    date: 'January 28, 2026',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=400&fit=crop',
    category: 'Style Guide',
  },
  {
    id: 2,
    title: '2026 Jewelry Trends: What\'s Hot This Season',
    excerpt: 'From bold statement pieces to delicate layering, explore the top jewelry trends defining this year.',
    date: 'January 22, 2026',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=400&fit=crop',
    category: 'Trends',
  },
  {
    id: 3,
    title: 'Caring for Your Sterling Silver: Expert Tips',
    excerpt: 'Keep your precious pieces sparkling with our comprehensive guide to sterling silver maintenance.',
    date: 'January 15, 2026',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=400&fit=crop',
    category: 'Care Tips',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            The Journal
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
            Style Tips & Trends
          </h2>
          <div className="w-20 h-px bg-primary mx-auto" />
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-card rounded-sm overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-charcoal/80 text-ivory text-xs tracking-widest uppercase">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                
                <h3 className="font-heading text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wide uppercase group-hover:gap-3 transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
