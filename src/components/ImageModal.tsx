"use client";

import { useEffect, useState } from "react";

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
}

export default function ImageModal({ isOpen, imageSrc, onClose }: ImageModalProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!show && !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors focus:outline-none"
        onClick={onClose}
      >
        <span className="material-symbols-outlined text-4xl">close</span>
      </button>
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Full Certificate"
          className={`max-w-full max-h-[90vh] rounded-lg shadow-2xl transition-transform duration-300 ${
            isOpen ? "scale-100" : "scale-95"
          }`}
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </div>
  );
}
