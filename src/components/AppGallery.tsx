import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const appScreenshots = [
  {
    id: 2,
    src: '/lovable-uploads/IMG_20250717_172353.png',
  },
  {
    id: 1,
    src: '/lovable-uploads/IMG_20250717_172741.png',
  },
  {
    id: 3,
    src: '/lovable-uploads/IMG_20250717_172728.png',
  },
  {
    id: 4,
    src: '/lovable-uploads/IMG_20250717_172715.png',
  },
  {
    id: 5,
    src: '/lovable-uploads/IMG_20250717_172630.png',
  },
  {
    id: 6,
    src: '/lovable-uploads/IMG_20250717_172353.png',
  },
  {
    id: 7,
    src: '/lovable-uploads/IMG_20250717_172705.png',
  },
  {
    id: 8,
    src: '/lovable-uploads/IMG_20250717_172640.png',
  },
  {
    id: 9,
    src: '/lovable-uploads/IMG_20250717_172653.png',
  },
  
  {
    id: 10,
    src: '/lovable-uploads/IMG_20250717_172407.png',
  },
  {
    id: 11,
    src: '/lovable-uploads/IMG_20250717_172535.png',
  },
  {
    id: 12,
    src: '/lovable-uploads/IMG_20250717_172802.png',
  },
  {
    id: 13,
    src: '/lovable-uploads/IMG_20250717_172814.png',
  },
  {
    id: 14,
    src: '/lovable-uploads/IMG_20250717_172751.png',
  }
];

export default function AppGallery() {
  const imageRefs = useRef<{ [key: string]: HTMLImageElement }>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: string]: boolean }>({});

  // Preload all images
  useEffect(() => {
    appScreenshots.forEach((screenshot) => {
      if (!imageRefs.current[screenshot.src]) {
        const img = new Image();
        img.onload = () => {
          setImagesLoaded(prev => ({ ...prev, [screenshot.src]: true }));
        };
        img.src = screenshot.src;
        imageRefs.current[screenshot.src] = img;
      }
    });
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || isFullscreen) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % appScreenshots.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isFullscreen]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % appScreenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length);
  };

  const currentScreenshot = appScreenshots[currentIndex];

  return (
    <motion.div 
      className="h-[500px] w-full md:h-[600px] lg:h-[650px] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Main Gallery */}
      <div className="relative h-full bg-gradient-to-br from-clinic-100 to-clinic-50 rounded-2xl overflow-hidden shadow-2xl">
        {/* Auto-play toggle */}
        <Button
          variant="outline"
          size="sm"
          className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </Button>

        {/* Screenshot Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreenshot.id}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="h-full flex items-center justify-center p-4 md:p-8"
          >
            <div className="relative max-w-[320px] md:max-w-[350px] mx-auto">
              {/* Phone Frame */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black rounded-[2.5rem] shadow-2xl transform rotate-1"></div>
                <div className="relative bg-black rounded-[2.5rem] p-2 shadow-xl">
                  {/* Loading placeholder */}
                  {!imagesLoaded[currentScreenshot.src] && (
                    <div className="w-full h-[500px] md:h-[550px] bg-gray-200 rounded-[2rem] flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-clinic-500"></div>
                    </div>
                  )}
                  <img
                    src={currentScreenshot.src}
                    alt={currentScreenshot.title}
                    className={`w-full h-auto rounded-[2rem] object-contain cursor-pointer transition-all duration-300 hover:scale-105 ${
                      imagesLoaded[currentScreenshot.src] ? 'opacity-100' : 'opacity-0 absolute'
                    }`}
                    onClick={() => setIsFullscreen(true)}
                    style={{ maxHeight: '550px' }}
                  />
                  {/* Zoom indicator */}
                  {imagesLoaded[currentScreenshot.src] && (
                    <div className="absolute top-4 right-4 bg-black/60 rounded-full p-2 opacity-0 hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors z-10"
        >
          <ChevronLeft className="w-5 h-5 text-clinic-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors z-10"
        >
          <ChevronRight className="w-5 h-5 text-clinic-600" />
        </button>

        {/* Progress Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {appScreenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-clinic-500 w-6' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Screenshot Details */}
      <motion.div
        key={currentScreenshot.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 text-center"
      >
        <h3 className="text-xl font-bold text-clinic-700 mb-2">
          {currentScreenshot.title}
        </h3>
        <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
          {currentScreenshot.description}
        </p>
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsFullscreen(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-2xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentScreenshot.src}
                alt={currentScreenshot.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 bg-black/60 rounded-full p-2 text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white">
                <h3 className="text-lg font-bold mb-1">{currentScreenshot.title}</h3>
                <p className="text-sm text-gray-200">{currentScreenshot.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
