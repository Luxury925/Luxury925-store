import { motion } from 'framer-motion';
import { Award, Heart, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Sparkles,
      title: '925 Sterling Silver',
      description: 'Every piece is crafted from premium 925 sterling silver, ensuring lasting beauty and quality.',
    },
    {
      icon: Heart,
      title: 'Handpicked Designs',
      description: 'Our collection features carefully curated designs that blend timeless elegance with modern style.',
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'We stand behind every piece with our satisfaction guarantee and dedicated customer support.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6">
              About Luxury925
            </h2>
            <div className="w-20 h-px bg-primary mb-8" />
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Welcome to <span className="text-foreground font-medium">Luxury925</span>, 
                a personal jewelry brand born from a passion for timeless elegance 
                and exceptional craftsmanship. We believe that every piece of jewelry 
                tells a story—a story of love, celebration, and cherished moments.
              </p>
              <p>
                Our carefully curated collection features stunning 925 sterling silver 
                pieces that combine classic sophistication with contemporary design. 
                From delicate everyday essentials to statement pieces for special 
                occasions, we offer jewelry that enhances your unique style.
              </p>
              <p>
                At Luxury925, we're committed to making luxury accessible. Each piece 
                is selected for its quality, beauty, and value, ensuring you receive 
                exceptional jewelry without the exceptional price tag.
              </p>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex gap-6 p-6 bg-muted/50 rounded-sm border border-border/50 hover:border-primary/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
