import React from 'react';
import { CheckCircle, Shield, Zap, Globe } from 'lucide-react';

const SEOSection: React.FC = () => {
  return (
    <section className="mt-20 max-w-4xl mx-auto px-4 sm:px-6 mb-16">
      
      {/* Primary Content Block - H2 and Main Keywords */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Free JPG to PDF Converter</h2>
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
          <p className="mb-4">
            Welcome to the easiest way to <strong>convert JPG to PDF online</strong>. Our tool is designed to be fast, free, and completely secure. 
            Whether you need to turn a single image into a document or handle multiple files, our <strong>image to PDF converter online</strong> handles it all directly in your browser.
          </p>
          <p>
            We believe productivity tools should be accessible to everyone. That's why we offer a <strong>free JPG to PDF converter</strong> with no hidden costs, no watermarks, and no registration requirements.
          </p>
        </div>
      </div>

      {/* How To Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <Zap className="h-6 w-6 text-indigo-600 mr-2" />
          How to Use This JPG to PDF Converter
        </h2>
        <p className="text-slate-600 mb-8 text-lg">
          Upload your JPG file, click convert, and download the PDF instantly.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <span className="block text-4xl font-bold text-indigo-200 mb-2">01</span>
            <h3 className="font-bold text-slate-900 mb-2">Upload Image</h3>
            <p className="text-sm text-slate-600">Drag and drop your JPG or PNG file into the upload box above.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <span className="block text-4xl font-bold text-indigo-200 mb-2">02</span>
            <h3 className="font-bold text-slate-900 mb-2">Auto Convert</h3>
            <p className="text-sm text-slate-600">Our tool instantly processes the file using client-side technology.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <span className="block text-4xl font-bold text-indigo-200 mb-2">03</span>
            <h3 className="font-bold text-slate-900 mb-2">Download PDF</h3>
            <p className="text-sm text-slate-600">Save your new high-quality PDF document immediately.</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Use Our Converter?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900">100% Free & Unlimited</h3>
              <p className="text-sm text-slate-600 mt-1">Convert as many files as you need. We truly mean "convert JPG to PDF free".</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
            <Shield className="h-5 w-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900">Private & Secure</h3>
              <p className="text-sm text-slate-600 mt-1">Your files are processed locally. No server uploads means your data stays safe.</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
            <Zap className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900">Blazing Fast</h3>
              <p className="text-sm text-slate-600 mt-1">No upload wait times. Conversion happens instantly on your device.</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
            <Globe className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900">Works Everywhere</h3>
              <p className="text-sm text-slate-600 mt-1">Compatible with Mobile, Tablet, Desktop, Chrome, Safari, and Edge.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Is this JPG to PDF converter free?</h3>
            <p className="text-slate-600 text-sm">Yes, our tool is completely free to use. There are no limits on the number of files you can convert.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Are my files safe?</h3>
            <p className="text-slate-600 text-sm">Absolutely. We use a client-side processing engine. This means your images are converted to PDF directly in your browser and are <strong>never uploaded to our servers</strong>.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Do I need to install software?</h3>
            <p className="text-slate-600 text-sm">No. This is a web-based tool. You can <strong>convert JPG to PDF online</strong> directly from your web browser without installing any apps or extensions.</p>
          </div>
        </div>
      </div>

      {/* Trust Statement */}
      <div className="mt-12 text-center">
        <p className="text-slate-500 text-sm max-w-2xl mx-auto">
          We are committed to providing a secure and reliable service. Our <strong>privacy-first approach</strong> ensures that your sensitive documents remain under your control at all times.
        </p>
      </div>

    </section>
  );
};

export default SEOSection;