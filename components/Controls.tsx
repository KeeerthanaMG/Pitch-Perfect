import React from 'react';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';

interface ControlsProps {
  onNext: () => void;
  onPrev: () => void;
  onReset: () => void;
  current: number;
  total: number;
}

const Controls: React.FC<ControlsProps> = ({ onNext, onPrev, onReset, current, total }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-20 bg-slate-900/90 backdrop-blur-md border-t border-slate-700 flex items-center justify-between px-8 z-40">
      
      <div className="flex items-center gap-4">
        <button 
            onClick={onReset}
            className="p-3 rounded-full hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            title="Restart"
        >
            <Home size={20} />
        </button>
        <div className="text-slate-500 font-mono text-sm">
            Slide {current + 1} / {total}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={onPrev}
          disabled={current === 0}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-white font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-all active:scale-95 border border-slate-600"
        >
          <ArrowLeft size={18} /> Prev
        </button>
        
        <button 
          onClick={onNext}
          disabled={current === total - 1}
          className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all active:scale-95 disabled:opacity-50 disabled:grayscale"
        >
          Next <ArrowRight size={18} />
        </button>
      </div>

      <div className="hidden md:block text-slate-500 text-xs text-right">
        <p>Use ⬅️ ➡️ arrow keys</p>
        <p>PEC Hacks Workshop</p>
      </div>
    </div>
  );
};

export default Controls;