"use client";
import { useRef, useState } from 'react';
import Link from 'next/link';
import { Aperture as ApertureIcon } from 'lucide-react';
import { CloudUpload as CloudUploadIcon } from 'lucide-react';

export default function EvaluatePage() {
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!isDraggedOver) setIsDraggedOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggedOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggedOver(false);
    console.log("File dropped!", e.dataTransfer.files);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log("Selected file:", e.target.files[0]);
    }
  };

  const PDFButtonClick = () => {
    fileInputRef.current?.click();
  };

  const dropZoneClasses = `
    flex flex-col items-center justify-start p-4 w-full max-w-xs sm:max-w-sm md:max-w-md h-80
    ${isDraggedOver ? 'border-4 border-[#004aad] shadow-2xl' : 'border border-gray-300'}
    rounded-lg
  `;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-2 pt-25 md:pt-12">
      {/* Headers and Description */}
      <p className="text-center text-2xl sm:text-3xl font-bold mb-1">
        Generate New Report
      </p>
      <p className="text-black text-center italic mb-6 text-base sm:text-lg">
        Select your preferred method for Electronics Bill Report.
      </p>

      {/* Two Boxes for Capture or Upload */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
        {/* Box 1: Capture with Camera */}
        <div className="flex flex-col items-center justify-start p-4 w-full max-w-xs sm:max-w-sm md:max-w-md h-80 rounded-lg mb-6 md:mb-0 md:mr-6 border border-gray-300">
          <ApertureIcon color="#004aad" size={120} className="mb-2" />
          <p className="text-black text-center text-sm sm:text-base mb-4">
            Scan your Electronics Plan directly with your device’s camera for instant symbol detection and fee computation.
          </p>
          <Link
            href="/evaluate/camera"
            className="mt-auto bg-[#004aad] text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-md flex items-center justify-center text-center w-full hover:bg-[#00337a]"
          >
            Capture With Camera
          </Link>
        </div>

        {/* Box 2: Upload */}
        <div
          className={dropZoneClasses}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <CloudUploadIcon color="#004aad" size={120} className="mb-2" />
          <p className="text-black text-center text-sm sm:text-base mb-4">
            Upload a digital copy of your Electronics Plan in PDF format for fast and accurate processing. Drag and drop your file here or
          </p>
          <button
            onClick={PDFButtonClick}
            className="mt-auto bg-[#004aad] text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-md w-full hover:bg-[#00337a] cursor-pointer"
          >
            Upload PDF
          </button>
          <input
            type="file"
            accept="application/pdf"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
}
