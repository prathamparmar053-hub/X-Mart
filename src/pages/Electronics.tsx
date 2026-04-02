import React from 'react';
import { Cpu } from 'lucide-react';
import { CategorySection } from '../components/CategorySection';
import { electronicsProducts } from '../data/products';

export const Electronics = () => (
  <div className="pt-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Electronic Gadgets</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">Stay ahead of the curve with our selection of cutting-edge technology and productivity tools.</p>
    </div>
    <CategorySection 
      id="electronics" 
      title="Next-Gen Tech" 
      icon={<Cpu className="w-6 h-6 text-white" />} 
      products={electronicsProducts} 
      bgColor="bg-white" 
      showViewAll={false}
    />
  </div>
);
