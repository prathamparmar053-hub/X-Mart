import React from 'react';
import { motion } from 'motion/react';
import { Shield, Globe, Zap } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-white">
      {/* About Hero */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Redefining the <span className="text-primary-dark">Modern Marketplace</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              X Mart was founded on the principle that quality and convenience should never be mutually exclusive. We curate the world's finest products for those who demand excellence in every aspect of their lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Uncompromising Quality", icon: <Shield />, text: "Every item in our catalog undergoes rigorous quality assessment before it reaches your hands." },
              { title: "Global Sourcing", icon: <Globe />, text: "We partner with artisanal producers and leading tech innovators from across the globe." },
              { title: "Elite Service", icon: <Zap />, text: "Our dedicated support team ensures a seamless experience from selection to delivery." }
            ].map((value, i) => (
              <div key={i} className="text-center p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {React.cloneElement(value.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Happy Clients", value: "50K+" },
              { label: "Premium Products", value: "1,200+" },
              { label: "Global Partners", value: "85+" },
              { label: "Quality Rating", value: "4.9/5" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50"></div>
      </section>
    </div>
  );
};
