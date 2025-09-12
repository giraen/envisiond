"use client";
import { useEffect, useRef, useState } from "react";

export default function EvaluatePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [photos, setPhotos] = useState<string[]>([]);

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
    if (photos.length >= 6) return; // Limit to 6 photos
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
      <h1 className="text-xl font-bold mb-4">Camera Capture Demo</h1>

      {/* video preview */}
      <video ref={videoRef} autoPlay className="w-full max-w-md rounded-lg shadow" />

      {/* capture & batch download box */}
      <div className="mt-4 flex gap-2">
        <button
          onClick={capturePhoto}
          disabled={photos.length >= 6}
          className={`px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 ${photos.length >= 6 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Capture Photo ({photos.length}/6)
        </button>
        {photos.length > 0 && (
          <button
            onClick={batchDownload}
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
          >
            Download All ({photos.length})
          </button>
        )}
      </div>

      {/* captured images preview */}
      <div className="mt-4 grid grid-cols-2 gap-4 w-full max-w-md">
        {photos.map((photo, idx) => (
          <div key={idx} className="relative">
            <img
              src={photo}
              alt={`Captured ${idx + 1}`}
              className="border rounded-lg shadow w-full"
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

      <canvas ref={canvasRef} className="hidden"></canvas>
    </div>
  );
}