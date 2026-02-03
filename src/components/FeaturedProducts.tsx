import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import ProductModal from './ProductModal';
import { useProductModal } from '@/hooks/useProductModal';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  discount: number;
  image: string;
  link: string;
  description?: string;
  category?: string;
  material?: string;
  rating?: number;
  gallery?: string[];
  badge?: string;
}

const FeaturedProducts = () => {
  const { isOpen, selectedProduct, openModal, closeModal } = useProductModal();

  const products: Product[] = [
    {
      id: 1,
      name: 'GXTRS Luxury 8CT Oval Cut Full Moissanite Ring S925 Silver For Women Sparkling Lab Diamond Wedding Band Fine Jewelry Certificate',
      price: '$44.02',
      originalPrice: '$114.94',
      discount: 50,
      image: new URL('@/images/Hd8696eac135c4240b43f003224d9d989O - Copie.jpg', import.meta.url).href,
      link: ' https://s.click.aliexpress.com/e/_c4DZiOpz',
      category: 'Rings',
      material: '100% Original 925 Sterling Silver',
      rating: 5.0,
      description: 'Solitaire Oval 4ct Lab Diamond cz Ring 100% Original 925 sterling silver Engagement Wedding band Rings for Women Bridal Jewelry',
      badge: 'Top On Sale',
      gallery: [
        new URL('@/images/Hd8696eac135c4240b43f003224d9d989O - Copie.jpg', import.meta.url).href,
        new URL('@/images/Saaa4abc1b8f14aefb074972d39fa72b0g.jpg_220x220q75.jpg_.avif', import.meta.url).href,
        new URL('@/images/H93dd3859d7534c37848b54cf9e21d95bE - Copie.jpg', import.meta.url).href,
        new URL('@/images/H8688d1ab1eec4d8c9222d228ae2feae3A - Copie.jpg', import.meta.url).href,
      ],
    },
    
  ];

  return (
    <>
      <section id="products" className="py-24 md:py-32 bg-muted/30">
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
              Curated Selection
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
              Featured Collection
            </h2>
            <div className="w-20 h-px bg-primary mx-auto" />
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="group relative bg-card rounded-sm overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-red-500 text-ivory px-3 py-1 text-xs font-bold tracking-widest uppercase">
                      {product.badge}
                    </div>
                  )}

                  {/* Discount Badge */}
                  <div className="absolute top-3 right-3 bg-gold text-charcoal px-3 py-1 text-xs font-bold tracking-widest">
                    -{product.discount}%
                  </div>
                  
                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="luxury"
                      size="sm"
                      onClick={() => openModal(product)}
                    >
                      View Details
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 text-center">
                  <h3 className="font-heading text-sm md:text-base text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 h-12">
                    {product.name}
                  </h3>
                  
                  {/* Price Section */}
                  <div className="mb-4 flex items-center justify-center gap-2">
                    <p className="text-primary font-bold tracking-wide text-lg">
                      {product.price}
                    </p>
                    <p className="text-muted-foreground font-medium text-xs line-through">
                      {product.originalPrice}
                    </p>
                  </div>
                  
                  <Button
                    variant="luxuryOutline"
                    size="sm"
                    className="w-full"
                    onClick={() => openModal(product)}
                  >
                    Buy Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default FeaturedProducts;
