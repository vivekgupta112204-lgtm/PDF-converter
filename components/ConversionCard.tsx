import React from 'react';
import { FileIcon, X, ArrowRight, CheckCircle, Download, RefreshCw, Loader2 } from 'lucide-react';
import { ConversionStatus, FileData } from '../types';

interface ConversionCardProps {
  status: ConversionStatus;
  fileData: FileData | null;
  onConvert: () => void;
  onReset: () => void;
  onDownload: () => void;
}

const ConversionCard: React.FC<ConversionCardProps> = ({ 
  status, 
  fileData, 
  onConvert, 
  onReset, 
  onDownload 
}) => {
  if (!fileData) return null;

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
      {/* Header of the card */}
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-100 p-2 rounded-lg">
            <FileIcon className="h-5 w-5 text-indigo-600" />
          </div>
          <div>
            <p className="font-medium text-slate-900 truncate max-w-[200px]">{fileData.file.name}</p>
            <p className="text-xs text-slate-500">{(fileData.file.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
        </div>
        {status !== ConversionStatus.CONVERTING && status !== ConversionStatus.COMPLETED && (
           <button onClick={onReset} className="text-slate-400 hover:text-red-500 transition-colors">
             <X className="h-5 w-5" />
           </button>
        )}
      </div>

      {/* Body */}
      <div className="p-8 flex flex-col items-center justify-center min-h-[200px]">
        {status === ConversionStatus.SELECTED && (
          <div className="text-center space-y-6">
            <div className="relative w-32 h-32 mx-auto rounded-lg overflow-hidden shadow-md border border-slate-200">
               <img src={fileData.previewUrl} alt="Preview" className="w-full h-full object-cover" />
            </div>
            <button
              onClick={onConvert}
              className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 shadow-lg shadow-indigo-200"
            >
              Convert to PDF
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {status === ConversionStatus.CONVERTING && (
          <div className="text-center space-y-4 w-full max-w-xs">
            <Loader2 className="h-12 w-12 text-indigo-600 animate-spin mx-auto" />
            <h3 className="text-lg font-medium text-slate-900">Converting your file...</h3>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div className="bg-indigo-600 h-2.5 rounded-full animate-progress-indeterminate"></div>
            </div>
            <p className="text-sm text-slate-500">Please wait while we process your image locally.</p>
          </div>
        )}

        {status === ConversionStatus.COMPLETED && (
          <div className="text-center space-y-6 animate-in fade-in zoom-in duration-300">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Conversion Successful!</h3>
              <p className="text-slate-500 mt-1">Your PDF is ready to download.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <button
                onClick={onDownload}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
              >
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </button>
              
              <button
                onClick={onReset}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <RefreshCw className="mr-2 h-5 w-5" />
                Convert Another
              </button>
            </div>
          </div>
        )}

        {status === ConversionStatus.ERROR && (
           <div className="text-center space-y-4">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
              <X className="h-6 w-6 text-red-600" />
            </div>
             <h3 className="text-lg font-medium text-red-600">Something went wrong</h3>
             <p className="text-slate-500">We couldn't convert this file. Please try again.</p>
             <button
                onClick={onReset}
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Try Another File
              </button>
           </div>
        )}
      </div>
      
      {/* Footer of the card for privacy notice */}
      {status === ConversionStatus.COMPLETED && (
        <div className="bg-green-50 px-6 py-3 border-t border-green-100 text-center">
          <p className="text-xs text-green-700 flex items-center justify-center">
            <ShieldCheck className="h-3 w-3 mr-1" />
            File processed securely in your browser. No data was uploaded to any server.
          </p>
        </div>
      )}
    </div>
  );
};

// Need to import ShieldCheck for the privacy footer inside the card if we want it there too
import { ShieldCheck } from 'lucide-react';

export default ConversionCard;