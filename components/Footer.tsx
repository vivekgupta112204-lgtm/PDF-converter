import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="text-slate-100 font-semibold mb-3">PDF Converter</h3>
            <p>Fast, secure, and free online file converter. We believe in privacy and simplicity.</p>
          </div>
          <div>
            <h3 className="text-slate-100 font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#disclaimer" className="hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-slate-100 font-semibold mb-3">Contact</h3>
            <p>Questions? vg112204@gmail.com</p>
            <p className="mt-4 text-xs">© {new Date().getFullYear()} PDF Converter. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;