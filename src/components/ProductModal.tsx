import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductBenefits from './ProductBenefits';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  discount?: number;
  image: string;
  link: string;
  description?: string;
  category?: string;
  material?: string;
  rating?: number;
  gallery?: string[];
  badge?: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) return null;

  const defaultDescription = `Exquisite ${product.name} crafted with premium 925 sterling silver. This elegant piece combines timeless design with modern sophistication, perfect for any occasion. Each detail is carefully executed to ensure exceptional quality and beauty.`;

  // Use gallery images or fallback to main image
  const images =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.image];

  const currentImage = images[selectedImageIndex];

  const goToPrevious = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setSelectedImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-charcoal/80 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="bg-background rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors duration-300"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>

              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Image Section */}
                <motion.div
                  className="flex flex-col gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {/* Main Image with Navigation */}
                  <div className="relative aspect-square rounded-sm overflow-hidden bg-muted group">
                    <motion.img
                      key={selectedImageIndex}
                      src={currentImage}
                      alt={`${product.name} - View ${selectedImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={goToPrevious}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal/60 hover:bg-charcoal/80 flex items-center justify-center text-ivory opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={goToNext}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal/60 hover:bg-charcoal/80 flex items-center justify-center text-ivory opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}

                    {/* Image Counter */}
                    {images.length > 1 && (
                      <div className="absolute bottom-4 right-4 px-3 py-1 bg-charcoal/70 text-ivory text-xs tracking-widest">
                        {selectedImageIndex + 1} / {images.length}
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Gallery */}
                  {images.length > 1 && (
                    <div className="flex gap-3">
                      {images.map((image, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`relative w-20 h-20 rounded-sm overflow-hidden border-2 transition-all duration-300 ${
                            selectedImageIndex === index
                              ? 'border-primary shadow-md'
                              : 'border-border hover:border-primary/50'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {selectedImageIndex === index && (
                            <div className="absolute inset-0 bg-primary/10" />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  )}

                  {/* Product Benefits */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <ProductBenefits />
                  </motion.div>
                </motion.div>

                {/* Details Section */}
                <motion.div
                  className="flex flex-col justify-between"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {/* Category & Title */}
                  <div>
                    {product.category && (
                      <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">
                        {product.category}
                      </p>
                    )}
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
                      {product.name}
                    </h2>

                    {/* Rating */}
                    {product.rating && (
                      <div className="flex items-center gap-2 mb-6">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-lg ${
                                i < Math.floor(product.rating!)
                                  ? 'text-gold'
                                  : 'text-muted'
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({product.rating})
                        </span>
                      </div>
                    )}

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-border">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="text-gold text-3xl font-bold tracking-wide">
                          {product.price}
                        </p>
                        {product.originalPrice && (
                          <p className="text-muted-foreground font-medium text-lg line-through">
                            {product.originalPrice}
                          </p>
                        )}
                        {product.discount && (
                          <div className="bg-red-500 text-ivory px-2 py-1 text-xs font-bold">
                            -{product.discount}% OFF
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 tracking-widest">
                        Premium 925 Sterling Silver
                      </p>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                      <h3 className="font-heading text-lg text-foreground mb-3">
                        About This Piece
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {product.description || defaultDescription}
                      </p>
                    </div>

                    {/* Material Info */}
                    {product.material && (
                      <div className="mb-8 p-4 bg-muted/50 rounded-sm border border-border/50">
                        <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">
                          Material
                        </p>
                        <p className="text-foreground font-medium">
                          {product.material}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="space-y-4 pt-6 border-t border-border">
                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Buy Now
                      </a>
                    </Button>
                    <Button
                      variant="luxuryOutline"
                      size="lg"
                      className="w-full"
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      Add to Wishlist
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
