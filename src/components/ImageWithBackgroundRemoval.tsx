
import { useState, useEffect } from 'react';
import { removeBackground, loadImageFromUrl } from '../utils/backgroundRemoval';
import { Loader2 } from 'lucide-react';

interface ImageWithBackgroundRemovalProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageWithBackgroundRemoval = ({ src, alt, className }: ImageWithBackgroundRemovalProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);
        setError(null);
        
        console.log('Loading image from URL...');
        const imageElement = await loadImageFromUrl(src);
        
        console.log('Removing background...');
        const processedBlob = await removeBackground(imageElement);
        
        const url = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(url);
        console.log('Background removed successfully');
      } catch (err) {
        console.error('Error processing image:', err);
        setError('Erro ao processar imagem');
        // Fallback to original image
        setProcessedImageUrl(src);
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();

    // Cleanup function to revoke object URLs
    return () => {
      if (processedImageUrl && processedImageUrl.startsWith('blob:')) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, [src]);

  if (isProcessing) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="flex flex-col items-center gap-4 p-8">
          <Loader2 className="w-8 h-8 animate-spin text-brand-light-blue" />
          <p className="text-sm text-gray-600">Processando imagem...</p>
        </div>
      </div>
    );
  }

  if (error && !processedImageUrl) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="text-center p-8">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={processedImageUrl || src}
      alt={alt}
      className={className}
    />
  );
};
