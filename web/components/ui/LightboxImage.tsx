"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type LightboxImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className: string;
  imageClassName: string;
  previewClassName?: string;
  previewImageClassName?: string;
};

export default function LightboxImage({
  src,
  alt,
  sizes,
  className,
  imageClassName,
  previewClassName = "h-[min(82vh,900px)] w-[min(92vw,1100px)]",
  previewImageClassName = "object-contain",
}: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label="Open image preview"
        className={`${className} cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]`}
        onClick={() => setIsOpen(true)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={imageClassName}
        />
      </button>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}>
          <button
            type="button"
            aria-label="Close image preview"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/60 text-2xl leading-none text-white transition hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
            ×
          </button>
          <div
            className={`relative overflow-hidden rounded-[var(--radius-lg)] bg-white shadow-2xl ${previewClassName}`}
            onClick={(event) => event.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes="92vw"
              className={previewImageClassName}
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
