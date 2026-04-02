import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Menu, X, ChevronRight, Apple, Shirt, Dumbbell, Cpu, User, Lock, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Information Bar (Top Bar) */}
      <div className="bg-gray-900 text-white py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="hidden sm:flex items-center gap-6">
            <span className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full" /> Free Global Shipping on Orders Over $500</span>
            <span className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full" /> 24/7 Professional Support</span>
          </div>
          <div className="flex items-center gap-6 ml-auto sm:ml-0">
            <div className="relative">
              <button 
                onClick={() => setIsSignInOpen(!isSignInOpen)}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <User className="w-3 h-3" /> Sign In
              </button>
              
              {/* Sign In Dropdown Form */}
              <AnimatePresence>
                {isSignInOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsSignInOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 text-gray-900 normal-case tracking-normal"
                    >
                      <h3 className="text-lg font-bold mb-4">Account Login</h3>
                      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-400 uppercase">Email</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input 
                              type="email" 
                              placeholder="name@company.com"
                              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-400 uppercase">Password</label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input 
                              type="password" 
                              placeholder="••••••••"
                              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                          </div>
                        </div>
                        <button className="w-full bg-primary hover:bg-primary-dark text-gray-900 py-2.5 rounded-lg font-bold text-sm shadow-md transition-all">
                          Sign In
                        </button>
                        <div className="pt-2 text-center">
                          <Link 
                            to="/signin" 
                            onClick={() => setIsSignInOpen(false)}
                            className="text-xs font-bold text-primary-dark hover:underline"
                          >
                            Full Sign In Page
                          </Link>
                        </div>
                      </form>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
            <a href="#" className="hover:text-primary transition-colors">Track Order</a>
            <button 
              onClick={() => window.alert('To download the full source code of this website, please use the "Export to ZIP" option in the AI Studio Settings menu.')}
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              Download App
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              X <span className="text-primary-dark">MART</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary-dark' : 'text-gray-600 hover:text-primary-dark'}`}>Home</NavLink>
            <div className="relative group">
              <button className="text-sm font-medium text-gray-600 group-hover:text-primary-dark transition-colors flex items-center gap-1">
                Categories <ChevronRight className="w-4 h-4 rotate-90" />
              </button>
              <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/grocery" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-dark">Grocery</Link>
                <Link to="/clothes" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-dark">Clothes</Link>
                <Link to="/sports" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-dark">Sports</Link>
                <Link to="/electronics" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-dark">Electronics</Link>
              </div>
            </div>
            <NavLink to="/about" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary-dark' : 'text-gray-600 hover:text-primary-dark'}`}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary-dark' : 'text-gray-600 hover:text-primary-dark'}`}>Contact</NavLink>
            <button className="bg-primary hover:bg-primary-dark text-gray-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Category Navigation Bar */}
      <div className="hidden md:block bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-10 h-14">
            <NavLink 
              to="/grocery" 
              className={({ isActive }) => `flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all hover:text-primary-dark ${isActive ? 'text-primary-dark' : 'text-gray-500'}`}
            >
              <Apple className="w-4 h-4" /> Grocery
            </NavLink>
            <NavLink 
              to="/clothes" 
              className={({ isActive }) => `flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all hover:text-primary-dark ${isActive ? 'text-primary-dark' : 'text-gray-500'}`}
            >
              <Shirt className="w-4 h-4" /> Apparel
            </NavLink>
            <NavLink 
              to="/sports" 
              className={({ isActive }) => `flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all hover:text-primary-dark ${isActive ? 'text-primary-dark' : 'text-gray-500'}`}
            >
              <Dumbbell className="w-4 h-4" /> Sports
            </NavLink>
            <NavLink 
              to="/electronics" 
              className={({ isActive }) => `flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all hover:text-primary-dark ${isActive ? 'text-primary-dark' : 'text-gray-500'}`}
            >
              <Cpu className="w-4 h-4" /> Electronics
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50">Home</Link>
              <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Categories</div>
              <Link to="/grocery" onClick={() => setIsMenuOpen(false)} className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-50">Grocery</Link>
              <Link to="/clothes" onClick={() => setIsMenuOpen(false)} className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-50">Clothes</Link>
              <Link to="/sports" onClick={() => setIsMenuOpen(false)} className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-50">Sports</Link>
              <Link to="/electronics" onClick={() => setIsMenuOpen(false)} className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-50">Electronics</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50">About</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50">Contact</Link>
              <div className="pt-4">
                <button className="w-full bg-primary text-gray-900 px-6 py-3 rounded-xl font-bold">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
