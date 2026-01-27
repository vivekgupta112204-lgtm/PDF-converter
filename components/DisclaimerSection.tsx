import React from 'react';
import { AlertCircle, HelpCircle, ExternalLink, Info } from 'lucide-react';
import AdUnit from './AdUnit';

const DisclaimerSection: React.FC = () => {
  return (
    <section id="disclaimer" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-slate-200 mb-4">
            <AlertCircle className="h-8 w-8 text-amber-500" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Disclaimer</h2>
          <p className="mt-4 text-lg text-slate-600">
            Important information regarding the limitations of this website.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8 md:p-10 space-y-8">
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Info className="h-6 w-6 text-slate-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">General Information</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The information provided by PDF Converter ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
                </p>
              </div>
            </div>

            <hr className="border-slate-100" />

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <HelpCircle className="h-6 w-6 text-slate-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">No Professional Advice</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The site cannot and does not contain professional legal or technical advice. The file conversion information is provided for general educational and utility purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice.
                </p>
              </div>
            </div>

            <hr className="border-slate-100" />

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <ExternalLink className="h-6 w-6 text-slate-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">External Links Disclaimer</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-6 mt-4 border border-amber-100">
               <h4 className="text-sm font-bold text-amber-800 uppercase tracking-wider mb-2">Use at Your Own Risk</h4>
               <p className="text-sm text-amber-700">
                 Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
               </p>
            </div>
            
            <AdUnit slot="2482578430" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;