import { motion } from 'framer-motion';
import { Truck, Zap, Shield, Lock } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
}

const benefits: Benefit[] = [
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Free Shipping',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Fast Delivery',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Secure Payment',
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Privacy Protected',
  },
];

const ProductBenefits = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          className="p-4 bg-muted/50 rounded-sm border border-border/50 hover:border-primary/30 transition-all duration-300 text-center group flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          whileHover={{ y: -4 }}
        >
          <div className="flex justify-center mb-2 text-primary group-hover:text-primary/80 transition-colors duration-300">
            {benefit.icon}
          </div>
          <h4 className="font-heading text-xs text-foreground">
            {benefit.title}
          </h4>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductBenefits;
