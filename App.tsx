import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import { Modules } from './types';
import ProgressBar from './components/ProgressBar';
import Slide from './components/Slide';
import Controls from './components/Controls';

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Error boundary
  useEffect(() => {
    const handleError = (e: ErrorEvent) => {
      console.error('App error:', e.error);
      setError(e.error?.message || 'An error occurred');
    };
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  // Keyboard navigation
  const handleNext = useCallback(() => {
    if (currentSlideIndex < SLIDES.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlideIndex(prev => prev + 1);
        setIsTransitioning(false);
      }, 300);
    }
  }, [currentSlideIndex, isTransitioning]);

  const handlePrev = useCallback(() => {
    if (currentSlideIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlideIndex(prev => prev - 1);
        setIsTransitioning(false);
      }, 300);
    }
  }, [currentSlideIndex, isTransitioning]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Oops! Something went wrong</h1>
          <p className="text-lg text-slate-300">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Reload
          </button>
        </div>
      </div>
    );
  }

  // Determine current module based on slide
  const currentSlide = SLIDES[currentSlideIndex];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-pink-500 selection:text-white">

      {/* Top Progress */}
      <ProgressBar
        currentModuleId={currentSlide.moduleId}
        totalModules={Modules.length - 1}
      />

      {/* Main Stage */}
      <main className="flex-grow relative overflow-hidden flex items-center justify-center bg-slate-900">

        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

        {/* Slide Content with Transition */}
        <div
          className={`w-full max-w-7xl mx-auto transition-all duration-300 transform ${isTransitioning
            ? 'opacity-0 translate-y-4 scale-95'
            : 'opacity-100 translate-y-0 scale-100'
            }`}
        >
          <Slide data={currentSlide} />
        </div>

      </main>

      {/* Bottom Controls */}
      <Controls
        onNext={handleNext}
        onPrev={handlePrev}
        onReset={() => setCurrentSlideIndex(0)}
        current={currentSlideIndex}
        total={SLIDES.length}
      />

    </div>
  );
}

export default App;