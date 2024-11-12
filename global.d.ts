// src/global.d.ts
export {};

declare global {
  interface Window {
    html2pdf: typeof import('html2pdf.js').Html2Pdf;
  }
}

