import React from 'react';
import { Scale, AlertTriangle, FileCheck, Ban } from 'lucide-react';

const TermsOfUseSection: React.FC = () => {
  return (
    <section id="terms" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-slate-50 rounded-xl shadow-sm border border-slate-100 mb-4">
            <Scale className="h-8 w-8 text-slate-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Terms of Use</h2>
          <p className="mt-4 text-lg text-slate-600">
            Please read these terms carefully before using our PDF conversion tool.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
            <div className="flex items-center mb-4">
              <FileCheck className="h-6 w-6 text-indigo-600 mr-3" />
              <h3 className="text-xl font-bold text-slate-900">1. Usage Agreement</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">
              By accessing "PDF Converter", you agree to be bound by these terms of service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. This tool is free to use for personal and commercial purposes under the condition of fair use.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-3" />
              <h3 className="text-xl font-bold text-slate-900">2. Disclaimer</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">
              The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
            <div className="flex items-center mb-4">
              <Ban className="h-6 w-6 text-red-500 mr-3" />
              <h3 className="text-xl font-bold text-slate-900">3. Limitations</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">
              In no event shall PDF Converter or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if we have been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
            <div className="flex items-center mb-4">
              <Scale className="h-6 w-6 text-slate-700 mr-3" />
              <h3 className="text-xl font-bold text-slate-900">4. User Content</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">
              You retain all ownership rights to the files you convert. Since conversion happens locally on your device, we do not claim ownership, nor do we store, view, or distribute your content. You are solely responsible for the files you convert and must ensure you have the legal right to do so.
            </p>
          </div>

        </div>

        <div className="mt-12 text-center border-t border-slate-100 pt-8">
           <p className="text-slate-500 text-sm">
             These terms are effective as of {new Date().toLocaleDateString()}. We reserve the right to update these terms at any time without notice.
           </p>
        </div>

      </div>
    </section>
  );
};

export default TermsOfUseSection;