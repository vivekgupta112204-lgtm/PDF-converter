import React from 'react';
import { FileText, ShieldCheck } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">PDF Converter</h1>
          </div>
        </a>
        <div className="hidden md:flex items-center text-sm font-medium text-slate-500">
          <ShieldCheck className="h-4 w-4 mr-1 text-green-600" />
          <span>Secure Client-Side Conversion</span>
        </div>
      </div>
    </header>
  );
};

export default Header;