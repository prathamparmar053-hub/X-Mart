import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                X <span className="text-primary-dark">MART</span>
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Your trusted source for premium items across multiple categories. Professional service, guaranteed quality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Categories</h4>
            <ul className="space-y-4">
              <li><Link to="/grocery" className="text-gray-500 hover:text-primary-dark transition-colors">Grocery</Link></li>
              <li><Link to="/clothes" className="text-gray-500 hover:text-primary-dark transition-colors">Apparel</Link></li>
              <li><Link to="/sports" className="text-gray-500 hover:text-primary-dark transition-colors">Sports</Link></li>
              <li><Link to="/electronics" className="text-gray-500 hover:text-primary-dark transition-colors">Electronics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-500 hover:text-primary-dark transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-primary-dark transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-500 hover:text-primary-dark transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary-dark transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-gray-500 mb-6">Get updates on new premium arrivals.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email"
                className="flex-grow px-4 py-2 rounded-lg border border-gray-200 focus:border-primary outline-none text-sm"
              />
              <button className="bg-primary text-gray-900 px-4 py-2 rounded-lg font-bold text-sm">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 X Mart. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-gray-400 hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
