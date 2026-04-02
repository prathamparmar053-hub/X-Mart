import React from 'react';
import { Dumbbell } from 'lucide-react';
import { CategorySection } from '../components/CategorySection';
import { sportsProducts } from '../data/products';

export const Sports = () => (
  <div className="pt-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Sports & Performance</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">Elevate your game with professional-grade equipment and advanced fitness technology.</p>
    </div>
    <CategorySection 
      id="sports" 
      title="Performance Gear" 
      icon={<Dumbbell className="w-6 h-6 text-white" />} 
      products={sportsProducts} 
      bgColor="bg-white" 
      showViewAll={false}
    />
  </div>
);
