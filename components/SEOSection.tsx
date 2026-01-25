import React from 'react';
import { Zap, Lock, MousePointerClick } from 'lucide-react';

const SEOSection: React.FC = () => {
  return (
    <div className="mt-20 space-y-20">
      
      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center space-y-3">
          <div className="mx-auto h-12 w-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
            <Zap className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Lightning Fast</h3>
          <p className="text-slate-600 leading-relaxed">
            Convert JPG images to PDF in under 5 seconds. Our optimized local processing engine ensures zero latency.
          </p>
        </div>
        <div className="text-center space-y-3">
          <div className="mx-auto h-12 w-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
            <Lock className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">100% Secure & Private</h3>
          <p className="text-slate-600 leading-relaxed">
            Your files never leave your device. All conversions happen locally in your browser, guaranteeing complete privacy.
          </p>
        </div>
        <div className="text-center space-y-3">
          <div className="mx-auto h-12 w-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
            <MousePointerClick className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Simple to Use</h3>
          <p className="text-slate-600 leading-relaxed">
            No signup, no complex settings. Just upload, convert, and download. It's the simplest JPG to PDF tool available.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Convert JPG to PDF</h2>
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
           <div className="relative">
             <div className="text-6xl font-black text-slate-100 absolute -top-8 -left-4 -z-10">01</div>
             <h4 className="text-lg font-bold text-slate-900 mb-2">Upload your Image</h4>
             <p className="text-slate-600">Drag and drop your JPG or PNG file into the upload box above, or simply click to select a file from your device.</p>
           </div>
           <div className="relative">
             <div className="text-6xl font-black text-slate-100 absolute -top-8 -left-4 -z-10">02</div>
             <h4 className="text-lg font-bold text-slate-900 mb-2">Automatic Conversion</h4>
             <p className="text-slate-600">Click the "Convert" button. Our client-side engine instantly transforms your image into a high-quality PDF document.</p>
           </div>
           <div className="relative">
             <div className="text-6xl font-black text-slate-100 absolute -top-8 -left-4 -z-10">03</div>
             <h4 className="text-lg font-bold text-slate-900 mb-2">Download File</h4>
             <p className="text-slate-600">Once finished, click "Download PDF" to save the file to your computer. No watermarks, no limits.</p>
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-6">
            <h4 className="text-lg font-bold text-slate-900 mb-2">Is it free to convert JPG to PDF?</h4>
            <p className="text-slate-600">Yes, PDF Converter is completely free to use. There are no hidden fees, subscriptions, or limits on the number of conversions.</p>
          </div>
          
          <div className="border-b border-slate-200 pb-6">
            <h4 className="text-lg font-bold text-slate-900 mb-2">Is my data safe?</h4>
            <p className="text-slate-600">Absolutely. Unlike other converters that upload your files to a server, we process everything locally on your computer. Your photos never touch our servers, ensuring 100% privacy.</p>
          </div>

          <div className="border-b border-slate-200 pb-6">
            <h4 className="text-lg font-bold text-slate-900 mb-2">Can I convert PNG files too?</h4>
            <p className="text-slate-600">Yes! The tool supports both JPG (JPEG) and PNG image formats for conversion to PDF.</p>
          </div>
          
          <div className="pb-6">
            <h4 className="text-lg font-bold text-slate-900 mb-2">Does it work on mobile?</h4>
            <p className="text-slate-600">Yes, our website is fully responsive and works great on iPhones, iPads, and Android devices.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SEOSection;