import React from 'react';
import { Shield, EyeOff, FileX, ServerOff, ArrowLeft } from 'lucide-react';
import AdUnit from './AdUnit';

const PrivacyPolicySection: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 min-h-[calc(100vh-64px)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb - Clicking '#' triggers the hashchange listener in App.tsx to return Home */}
        <div className="mb-8">
          <a 
            href="#" 
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Converter
          </a>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-200 mb-4">
            <Shield className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="mt-4 text-lg text-slate-600">
            Transparency is our core value. Here is exactly how we handle your data.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8 md:p-10 space-y-10">
            
            {/* Core Privacy Promise */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <ServerOff className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">No Server Uploads</h3>
                <p className="text-slate-600 leading-relaxed">
                  Your files are <strong>never</strong> uploaded to our servers. The conversion process happens entirely within your web browser using JavaScript and WebAssembly technologies. Unlike other tools that require file uploads, your sensitive documents remain on your device at all times.
                </p>
              </div>
            </div>

            {/* Data Collection */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <EyeOff className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">No Data Collection</h3>
                <p className="text-slate-600 leading-relaxed">
                  We do not collect, store, or view the content of the files you convert. Since the processing is client-side, we technically cannot access your file contents. We do not require user accounts, emails, or personal information to use this service.
                </p>
              </div>
            </div>

            {/* File Retention */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <FileX className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Deletion</h3>
                <p className="text-slate-600 leading-relaxed">
                  Because files are processed in your browser's temporary memory, they are effectively "deleted" the moment you close the tab or refresh the page. We do not maintain any history or backups of your documents.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8 mt-8">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Additional Details</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                <li>We use standard local storage only to remember your UI preferences (if applicable).</li>
                <li>We may use anonymous analytics (like Google Analytics) to track site performance and visitor counts, but this does not link to your file data.</li>
                <li>This site is provided "as is" without warranties. While we strive for perfection, please check your converted files for accuracy.</li>
              </ul>
              <p className="text-xs text-slate-400 mt-6">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
          
          <div className="px-8 pb-8">
            <AdUnit slot="2482578430" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;