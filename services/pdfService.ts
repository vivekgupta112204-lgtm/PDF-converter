import { FileData } from '../types';

declare global {
  interface Window {
    jspdf: any;
  }
}

export const convertImageToPdf = async (fileData: FileData): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      if (!window.jspdf) {
        reject(new Error("PDF conversion library not loaded"));
        return;
      }

      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      
      const img = new Image();
      img.src = fileData.previewUrl;

      img.onload = () => {
        const imgWidth = img.width;
        const imgHeight = img.height;
        
        // A4 size in mm
        const pageWidth = 210;
        const pageHeight = 297;
        
        // Calculate scaling to fit within A4 margins (10mm margin)
        const margin = 10;
        const maxWidth = pageWidth - (margin * 2);
        const maxHeight = pageHeight - (margin * 2);
        
        const widthRatio = maxWidth / imgWidth;
        const heightRatio = maxHeight / imgHeight;
        const ratio = Math.min(widthRatio, heightRatio, 1); // Ensure we don't upscale if smaller
        
        const finalWidth = imgWidth * ratio;
        const finalHeight = imgHeight * ratio;
        
        // Center image
        const x = (pageWidth - finalWidth) / 2;
        const y = (pageHeight - finalHeight) / 2;

        doc.addImage(img, 'JPEG', x, y, finalWidth, finalHeight);
        
        const pdfBlob = doc.output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);
        
        // Artificial delay for UX perception if it's too fast
        setTimeout(() => {
          resolve(pdfUrl);
        }, 800);
      };

      img.onerror = (err) => {
        reject(err);
      };

    } catch (error) {
      reject(error);
    }
  });
};

export const revokePdfUrl = (url: string) => {
  URL.revokeObjectURL(url);
};