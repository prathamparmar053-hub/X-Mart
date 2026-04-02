import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Mail, ArrowRight, User, LayoutDashboard, ShieldCheck } from 'lucide-react';

export const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login for UI demonstration
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    return (
      <div className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="bg-primary p-3 rounded-2xl">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
            </div>
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="text-sm font-bold text-gray-500 hover:text-primary-dark transition-colors"
            >
              Sign Out
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="w-24 h-24 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-sm">
                  <User className="w-12 h-12 text-primary-dark" />
                </div>
                <div className="text-center mb-8">
                  <h2 className="text-xl font-bold text-gray-900">{email.split('@')[0]}</h2>
                  <p className="text-sm text-gray-500">{email}</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-sm font-medium text-gray-500">Account Status</span>
                    <span className="flex items-center gap-1 text-xs font-bold text-green-600 uppercase tracking-wider">
                      <ShieldCheck className="w-3 h-3" /> Active
                    </span>
                  </div>
                  <button className="w-full py-3 text-sm font-bold text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
                <div className="space-y-6">
                  {[
                    { action: "Order #4592 Placed", date: "2 hours ago", status: "Processing" },
                    { action: "Profile Updated", date: "Yesterday", status: "Completed" },
                    { action: "New Login Detected", date: "3 days ago", status: "Security" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
                      <div>
                        <p className="font-bold text-gray-900">{item.action}</p>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                      <span className="px-3 py-1 bg-yellow-50 text-primary-dark text-[10px] font-bold uppercase tracking-widest rounded-full">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-8 rounded-3xl text-white">
                  <h4 className="text-lg font-bold mb-2">Exclusive Offers</h4>
                  <p className="text-sm text-gray-400 mb-6">Unlock premium discounts on electronics this week.</p>
                  <button className="text-primary text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    View Deals <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="bg-primary p-8 rounded-3xl text-gray-900">
                  <h4 className="text-lg font-bold mb-2">Support Center</h4>
                  <p className="text-sm text-gray-900/70 mb-6">Need help with your recent orders? Our team is here.</p>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-xl text-sm font-bold">
                    Contact Help
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-gray-50 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md w-full px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100"
        >
          <div className="text-center mb-10">
            <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h1>
            <p className="text-gray-500">Access your professional dashboard</p>
          </div>

          <form className="space-y-6" onSubmit={handleSignIn}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-gray-700">Password</label>
                <a href="#" className="text-xs font-bold text-primary-dark hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 ml-1">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
              <label htmlFor="remember" className="text-sm text-gray-600 font-medium">Keep me signed in</label>
            </div>

            <button 
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-gray-900 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              Sign In
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account? <a href="#" className="font-bold text-primary-dark hover:underline">Create Account</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
