import React, { useState } from 'react';
import { asset } from '@/src/lib/asset';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  fallbackSrc?: string;
}

/**
 * Next.js compatible Image component for Vite and Next.js environments.
 * Handles responsive sizing, fill layouts, lazy loading, and provides
 * elegant fallback images if a local file is missing.
 */
export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  fallbackSrc,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If local file fails to load or hasn't been mounted yet, fallback gracefully
  const effectiveSrc = hasError && fallbackSrc ? fallbackSrc : asset(src);

  const style: React.CSSProperties = fill
    ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit: 'cover',
      }
    : {
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
      };

  return (
    <div
      className={`${fill ? 'relative w-full h-full' : 'inline-block'} overflow-hidden ${className}`}
    >
      <img
        src={effectiveSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={style}
        onError={() => {
          if (!hasError && fallbackSrc) {
            setHasError(true);
          }
        }}
        onLoad={() => setIsLoaded(true)}
        className={`transition-all duration-700 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-80 scale-[1.02]'
        } ${fill ? 'w-full h-full object-cover' : ''}`}
        {...props}
      />
    </div>
  );
};

export default Image;
