import React, { useCallback, useState, useRef } from 'react';
import { UploadCloud, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { FileType } from '../types';

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
  accept?: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect, accept = ".jpg,.jpeg,.png" }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const validateAndProcessFile = useCallback((file: File) => {
    setError(null);
    if (!file.type.match('image.*')) {
      setError("Please upload a valid image file (JPG or PNG).");
      return;
    }
    // Check size (e.g., 20MB limit)
    if (file.size > 20 * 1024 * 1024) {
      setError("File size exceeds the 20MB limit.");
      return;
    }
    onFileSelect(file);
  }, [onFileSelect]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndProcessFile(e.dataTransfer.files[0]);
    }
  }, [validateAndProcessFile]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndProcessFile(e.target.files[0]);
    }
  }, [validateAndProcessFile]);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div 
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300
          ${isDragOver 
            ? 'border-indigo-500 bg-indigo-50 shadow-lg scale-[1.02]' 
            : 'border-slate-300 hover:border-indigo-400 hover:bg-slate-50'
          }
        `}
      >
        <input 
          type="file" 
          ref={inputRef}
          className="hidden" 
          accept={accept}
          onChange={handleInputChange}
        />
        
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className={`p-4 rounded-full ${isDragOver ? 'bg-indigo-100' : 'bg-slate-100'}`}>
            <UploadCloud className={`h-10 w-10 ${isDragOver ? 'text-indigo-600' : 'text-slate-400'}`} />
          </div>
          <div>
            <p className="text-xl font-semibold text-slate-700">
              Click or drag file to upload
            </p>
            <p className="text-sm text-slate-500 mt-2">
              JPG or PNG up to 20 MB
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-700">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
          <div className="text-indigo-600 font-bold text-lg mb-1">1. Upload</div>
          <div className="text-xs text-slate-500">Select your JPG image</div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
          <div className="text-indigo-600 font-bold text-lg mb-1">2. Convert</div>
          <div className="text-xs text-slate-500">Auto-converts to PDF</div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
          <div className="text-indigo-600 font-bold text-lg mb-1">3. Download</div>
          <div className="text-xs text-slate-500">Save your new file</div>
        </div>
      </div>
    </div>
  );
};

export default FileUploader;