import React from 'react';
import { Modules } from '../types';

interface ProgressBarProps {
  currentModuleId: number;
  totalModules: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentModuleId, totalModules }) => {
  const progress = ((currentModuleId + 1) / (totalModules + 1)) * 100;

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-slate-800 border-b border-slate-700 h-16 flex items-center px-4 justify-between shadow-lg">
      <div className="flex items-center space-x-4 overflow-x-auto no-scrollbar mask-gradient">
        {Modules.map((mod) => (
          <div
            key={mod.id}
            className={`flex flex-col items-center min-w-max px-3 py-1 rounded-md transition-all duration-300 ${
              mod.id === currentModuleId
                ? 'bg-indigo-600 text-white scale-105 font-bold'
                : mod.id < currentModuleId
                ? 'text-indigo-400 opacity-70'
                : 'text-slate-500'
            }`}
          >
            <span className="text-sm whitespace-nowrap">M{mod.id}: {mod.title}</span>
          </div>
        ))}
      </div>
      
      {/* Overall Progress Line */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;