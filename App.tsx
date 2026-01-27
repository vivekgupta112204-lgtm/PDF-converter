import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FileUploader from './components/FileUploader';
import ConversionCard from './components/ConversionCard';
import SEOSection from './components/SEOSection';
import AdUnit from './components/AdUnit';
import { ConversionStatus, FileData, ConversionResult } from './types';
import { convertImageToPdf, revokePdfUrl } from './services/pdfService';

const App: React.FC = () => {
  const [status, setStatus] = useState<ConversionStatus>(ConversionStatus.IDLE);
  const [fileData, setFileData] = useState<FileData | null>(null);
  const [result, setResult] = useState<ConversionResult | null>(null);

  // Clean up object URLs when component unmounts or file changes
  useEffect(() => {
    return () => {
      if (fileData?.previewUrl) {
        URL.revokeObjectURL(fileData.previewUrl);
      }
      if (result?.pdfUrl) {
        revokePdfUrl(result.pdfUrl);
      }
    };
  }, [fileData, result]);

  const handleFileSelect = (file: File) => {
    const previewUrl = URL.createObjectURL(file);
    setFileData({ file, previewUrl });
    setStatus(ConversionStatus.SELECTED);
  };

  const handleConvert = async () => {
    if (!fileData) return;
    
    setStatus(ConversionStatus.CONVERTING);
    
    try {
      const pdfUrl = await convertImageToPdf(fileData);
      const fileName = fileData.file.name.replace(/\.[^/.]+$/, "") + ".pdf";
      
      setResult({ pdfUrl, fileName });
      setStatus(ConversionStatus.COMPLETED);
      
      // Auto download attempt
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error("Conversion failed", error);
      setStatus(ConversionStatus.ERROR);
    }
  };

  const handleDownload = () => {
    if (result) {
      const link = document.createElement('a');
      link.href = result.pdfUrl;
      link.download = result.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleReset = () => {
    setStatus(ConversionStatus.IDLE);
    setFileData(null);
    setResult(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow w-full bg-slate-50 relative">
        
        {/* Hero Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-indigo-50 to-slate-50 h-[500px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-24 relative z-10">
          
          {/* Main Hero Text */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Free <span className="text-indigo-600">JPG to PDF Converter</span> Online
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Convert JPG images to PDF online quickly and securely with no signup required.
            </p>
          </div>

          {/* Core Interaction Area */}
          <div className="mb-12">
            {status === ConversionStatus.IDLE ? (
              <FileUploader onFileSelect={handleFileSelect} />
            ) : (
              <ConversionCard 
                status={status}
                fileData={fileData}
                onConvert={handleConvert}
                onReset={handleReset}
                onDownload={handleDownload}
              />
            )}
          </div>

          {/* SEO Content & Information */}
          <SEOSection />

          {/* Bottom Advertisement */}
          <div className="max-w-4xl mx-auto mt-16">
            <AdUnit slot="2482578430" />
          </div>
          
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default App;