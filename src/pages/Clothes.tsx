import React from 'react';
import { Shirt } from 'lucide-react';
import { CategorySection } from '../components/CategorySection';
import { clothesProducts } from '../data/products';

export const Clothes = () => (
  <div className="pt-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Executive Apparel</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">Dress for success with our curated collection of professional attire, designed for the modern executive.</p>
    </div>
    <CategorySection 
      id="clothes" 
      title="Corporate Style" 
      icon={<Shirt className="w-6 h-6 text-white" />} 
      products={clothesProducts} 
      bgColor="bg-white" 
      showViewAll={false}
    />
  </div>
);
