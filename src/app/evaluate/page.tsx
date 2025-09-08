"use client";
import { useEffect, useRef, useState } from "react";

export default function EvaluatePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [photoURL, setPhotoURL] = useState<string | null>(null);

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
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert canvas to image URL
      const imageURL = canvas.toDataURL("image/png");
      setPhotoURL(imageURL);
    }
  };

  const savePhoto = () => {
    if (photoURL) {
      const link = document.createElement("a");
      link.href = photoURL;
      link.download = "captured-photo.png";
      link.click();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-xl font-bold mb-4">Camera Capture Demo</h1>

      <video ref={videoRef} autoPlay className="w-full max-w-md rounded-lg shadow" />

      <div className="mt-4 flex gap-2">
        <button
          onClick={capturePhoto}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Capture Photo
        </button>
        {photoURL && (
          <button
            onClick={savePhoto}
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
          >
            Save Photo
          </button>
        )}
      </div>

      {photoURL && (
        <img
          src={photoURL}
          alt="Captured"
          className="mt-4 border rounded-lg shadow w-full max-w-md"
        />
      )}

      <canvas ref={canvasRef} className="hidden"></canvas>
    </div>
  );
}
