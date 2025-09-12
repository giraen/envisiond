"use client";
import { useState } from 'react';
import Link from 'next/link';
import {Aperture as ApertureIcon} from 'lucide-react';
import {CloudUpload as CloudUploadIcon} from 'lucide-react';

export default function EvaluatePage() {
  
  // PDF JS
  const [isDraggedOver, setIsDraggedOver] = useState(false); // State to track if an item is being dragged over the drop zone
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    // This is necessary to allow the drop event to fire
    e.preventDefault(); 
    if (!isDraggedOver) {
      setIsDraggedOver(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggedOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggedOver(false);
    console.log("File dropped!", e.dataTransfer.files);
    // Add logic here to process the dropped file
  };

  const PDFButtonClick = () => {
    console.log("Upload PDF button was clicked!");
  };

  const dropZoneClasses = `
    flex flex-col items-center justify-center p-4 w-110 h-160
    ${isDraggedOver ? 'border-4 border-blue-500 shadow-2xl' : ''}
  `;

  
  return (

    <div className="flex flex-col items-center justify-center h-screen">

        {/*Headers and Description*/}
        <p className="text-white-400 text-center text-3xl font-bold mb-1">Generate New Report</p>
        <p className="text-white-400 text-center italic">Select your preferred method for Electronics Bill Report.</p>

        {/*Two Boxes for Capture or Upload*/}
        <div className="flex items-center justify-center">

          {/*Box 1: Capture with Camera*/}
          <div className="flex flex-col items-center justify-center p-4 w-110 h-160 mr-50">
            <ApertureIcon color="white" size={250} strokeWidth={0.5}></ApertureIcon>
            <p className="text-white-400 text-center">Scan your Electronics Plan directly with your device’s camera for instant symbol detection and fee computation.</p>
            <Link href="/evaluate/camera" className="mt-8 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out shadow-md flex items-center justify-center text-center">
              Capture With Camera
            </Link>
          </div>

          {/*Box 2: Upload*/}
          <div 
            className={dropZoneClasses}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <CloudUploadIcon color="white" size={250} strokeWidth={0.5}></CloudUploadIcon>
            <p className="text-white-400 text-center">Upload a digital copy of your Electronics Plan in PDF format for fast and accurate processing.</p>
            <button onClick={PDFButtonClick} className="mt-8 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out shadow-md">Upload PDF</button>
            <p className="text-white-400 text-center italic text-xs mt-1">or drag PDFs here</p>
          </div>

        </div>
      
    </div>
    
  );
}
