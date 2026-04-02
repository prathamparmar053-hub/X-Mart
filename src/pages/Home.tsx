import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-primary-dark text-xs font-bold uppercase tracking-wider mb-6">
                <CheckCircle2 className="w-4 h-4" />
                Your One-Stop Premium Marketplace
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Quality Items for Every <span className="text-primary-dark">Lifestyle</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                From artisanal groceries to high-tech gadgets, we curate only the finest products for our professional clientele.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/grocery" className="bg-primary hover:bg-primary-dark text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group">
                  Start Shopping
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="border-2 border-gray-200 hover:border-primary text-gray-700 px-8 py-4 rounded-full font-bold text-lg transition-all text-center">
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" 
                  alt="Marketplace Showcase"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-primary p-3 rounded-xl">
                    <Star className="w-6 h-6 text-white fill-current" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Global Reach</p>
                    <p className="text-xl font-bold text-gray-900">100% Reliable</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-yellow-50 rounded-full blur-3xl opacity-50 -z-0"></div>
      </section>
    </>
  );
};
