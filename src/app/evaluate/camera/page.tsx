"use client";
import { useEffect, useRef, useState } from "react";

export default function EvaluatePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [photos, setPhotos] = useState<string[]>([]);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    // Request access to the user's camera
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing the camera: ", error);
      });
  }, []);

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
      }
      const imageURL = canvas.toDataURL("image/png");
      setPhotos((prev) => [...prev, imageURL]);
    }
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const clearPhotos = () => {
    setPhotos([]);
  };

  const batchDownload = async () => {
    // Dynamically import JSZip only when needed
    const JSZip = (await import("jszip")).default;
    const zip = new JSZip();
    photos.forEach((photo, idx) => {
      // Remove the data URL prefix before adding to zip
      const base64Data = photo.split(",")[1];
      zip.file(`photo-${idx + 1}.png`, base64Data, { base64: true });
    });
    const content = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(content);
    link.download = "photos.zip";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-xl font-bold mb-4">Camera Capture</h1>

      {/* Modal for image preview */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-h-[98vh] max-w-[98vw] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-80"
            onClick={() => setPreviewImage(null)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}

      {photos.length === 0 ? (
        // Center video preview when no photos
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center p-4 w-full max-w-md">
            <video ref={videoRef} autoPlay className="w-full rounded-lg shadow" />
            <div className="mt-4 flex gap-2">
              <button
                onClick={capturePhoto}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
              >
                Capture Photo
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Two-column layout when there are photos
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 w-full">

          {/* Left side: Video and buttons */}
          <div className="flex flex-col items-center justify-center p-4 w-full md:w-1/2">
            <video ref={videoRef} autoPlay className="w-full max-w-md rounded-lg shadow" />
            <div className="mt-4 flex gap-2">
              <button
                onClick={capturePhoto}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
              >
                Capture Photo
              </button>
              <button
                onClick={batchDownload}
                className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
              >
                Download All ({photos.length})
              </button>
            </div>
          </div>

          {/* Right side: Photo grid */}
          <div className="mt-4 w-full md:w-1/2 max-w-md">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Captured Photos ({photos.length})</span>
              <button
                onClick={clearPhotos}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 text-sm"
              >
                Clear Captures
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {photos.map((photo, idx) => (
                <div key={idx} className="relative">
                  <img
                    src={photo}
                    alt={`Captured ${idx + 1}`}
                    className="border rounded-lg shadow w-full cursor-pointer"
                    onClick={() => setPreviewImage(photo)}
                  />
                  <button
                    onClick={() => removePhoto(idx)}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full px-2 py-1 text-xs hover:bg-red-700"
                    title="Remove"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      )}

      <canvas ref={canvasRef} className="hidden"></canvas>
    </div>
  );
}