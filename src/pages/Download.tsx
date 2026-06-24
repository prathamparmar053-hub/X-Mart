import React from 'react';
import { motion } from 'motion/react';
import { Download as DownloadIcon, FileJson, Github, Archive, ArrowRight, Info } from 'lucide-react';

export const Download = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Download <span className="text-primary-dark">X Mart</span> Source</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get the full production-ready source code for this application. Our codebase is built with React, TypeScript, and Tailwind CSS.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="bg-primary p-4 rounded-2xl shrink-0">
                  <Archive className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Export to ZIP</h3>
                  <p className="text-gray-600 mb-4">Download a complete archive of the project files, including all components, styles, and configurations.</p>
                  <div className="flex items-center gap-2 text-sm font-bold text-primary-dark">
                    <Info className="w-4 h-4" /> Available in AI Studio Settings
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="bg-gray-900 p-4 rounded-2xl shrink-0">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Push to GitHub</h3>
                  <p className="text-gray-600 mb-4">Directly export this project to a new or existing GitHub repository for version control and deployment.</p>
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                    <Info className="w-4 h-4" /> Available in AI Studio Settings
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">How to Download</h2>
              <ol className="space-y-6 list-decimal list-inside text-gray-400">
                <li className="pl-2"><span className="text-white font-medium">Open Settings:</span> Click the gear icon in the top right corner of the AI Studio interface.</li>
                <li className="pl-2"><span className="text-white font-medium">Select Export:</span> Choose "Export to ZIP" to download the files locally.</li>
                <li className="pl-2"><span className="text-white font-medium">Unzip & Install:</span> Extract the files and run <code className="bg-white/10 px-2 py-1 rounded text-primary">npm install</code> to get started.</li>
                <li className="pl-2"><span className="text-white font-medium">Run Locally:</span> Use <code className="bg-white/10 px-2 py-1 rounded text-primary">npm run dev</code> to start your local server.</li>
              </ol>
              <div className="mt-12">
                <button 
                  onClick={() => window.alert('Please use the "Export to ZIP" option in the AI Studio Settings menu to download the code.')}
                  className="w-full bg-primary hover:bg-primary-dark text-gray-900 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <DownloadIcon className="w-6 h-6" />
                  Get Source Code
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Tech Stack Included</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React 18', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Motion', 'Vite'].map((tech) => (
              <span key={tech} className="px-6 py-2 bg-gray-100 rounded-full text-sm font-bold text-gray-600 border border-gray-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
