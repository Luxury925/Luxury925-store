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

export const useProductModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  return {
    isOpen,
    selectedProduct,
    openModal,
    closeModal,
  };
};
