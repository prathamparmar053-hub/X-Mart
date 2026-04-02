import React from 'react';
import { Apple } from 'lucide-react';
import { CategorySection } from '../components/CategorySection';
import { groceryProducts } from '../data/products';

export const Grocery = () => (
  <div className="pt-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Grocery</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">Sourced from the finest local and international producers, our grocery selection brings gourmet quality to your kitchen.</p>
    </div>
    <CategorySection 
      id="grocery" 
      title="Fresh & Artisanal" 
      icon={<Apple className="w-6 h-6 text-white" />} 
      products={groceryProducts} 
      bgColor="bg-white" 
      showViewAll={false}
    />
  </div>
);
