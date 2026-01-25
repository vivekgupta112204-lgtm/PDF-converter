export enum ConversionStatus {
  IDLE = 'IDLE',
  SELECTED = 'SELECTED',
  CONVERTING = 'CONVERTING',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR'
}

export interface FileData {
  file: File;
  previewUrl: string;
}

export interface ConversionResult {
  pdfUrl: string;
  fileName: string;
}

export enum FileType {
  JPG = 'image/jpeg',
  PNG = 'image/png'
}