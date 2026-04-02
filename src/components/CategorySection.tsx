import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface CategorySectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  products: Product[];
  bgColor: string;
  showViewAll?: boolean;
}

export const CategorySection = ({ id, title, icon, products, bgColor, showViewAll = true }: CategorySectionProps) => (
  <section id={id} className={`py-24 ${bgColor}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <div className="bg-primary p-3 rounded-2xl shadow-sm">
            {icon}
          </div>
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        {showViewAll && (
          <button className="hidden sm:flex items-center gap-2 text-sm font-bold text-primary-dark hover:gap-3 transition-all">
            View All {title} <ArrowUpRight className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <motion.div 
            key={product.id}
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                In Stock
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-primary-dark">{product.price}</span>
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-primary hover:text-gray-900 transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
