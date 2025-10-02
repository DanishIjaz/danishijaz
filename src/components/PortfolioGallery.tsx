import { useState, useEffect } from 'react';

interface PortfolioGalleryProps {
  folder: string;
  samples: string[];
  gradient: string;
}

export default function PortfolioGallery({ folder, samples, gradient }: PortfolioGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % samples.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [samples.length]);

  return (
    <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {samples.map((sample, idx) => (
          <div key={idx} className="min-w-full h-48 relative">
            <img
              src={`/assets/gfx/${folder}/${sample}`}
              alt={`${folder} sample ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-0 hover:opacity-20 transition-opacity duration-300`}></div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {samples.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? `bg-white scale-125`
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
