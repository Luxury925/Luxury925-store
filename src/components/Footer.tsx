import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collection', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Journal', href: '#blog' },
  ];

  return (
    <footer id="footer" className="bg-charcoal text-ivory">
      {/* Newsletter Section */}
      <div className="border-b border-silver/10">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-2xl md:text-3xl mb-4">
              Stay Connected
            </h3>
            <p className="text-silver mb-8">
              Follow us on Instagram for the latest collections, style inspiration, 
              and exclusive offers.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://www.instagram.com/luxury925.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <Instagram className="w-5 h-5" />
                Follow @luxury925
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <a href="#home" className="font-heading text-2xl tracking-widest mb-4 block">
              <span className="text-gradient-gold">LUXURY</span>925
            </a>
            <p className="text-silver text-sm leading-relaxed mb-6">
              Elegant sterling silver jewelry for every occasion. 
              Timeless pieces crafted with passion.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg mb-6 elegant-underline inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-silver hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg mb-6 elegant-underline inline-block">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-silver text-sm">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <a href="mailto:luxury925@gmail.com" className="hover:text-gold transition-colors">
                  luxury925@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-silver text-sm">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>+2162184427</span>
              </li>
              <li className="flex items-start gap-3 text-silver text-sm">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>Tunisia,Sousse</span>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h4 className="font-heading text-lg mb-6 elegant-underline inline-block">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/luxury925.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-silver/30 rounded-sm flex items-center justify-center text-silver hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-silver/10">
        <div className="container mx-auto px-6 py-6">
          <p className="text-center text-silver text-xs tracking-wide">
            © {currentYear} Luxury925. All rights reserved. 
            Crafted with ♥ for jewelry lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
