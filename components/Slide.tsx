import React from 'react';
import { SlideContent } from '../types';
import MemeImage from './MemeImage';
import { CheckCircle, AlertTriangle, Lightbulb, MessageSquareQuote, Terminal } from 'lucide-react';

interface SlideProps {
  data: SlideContent;
}

const Slide: React.FC<SlideProps> = ({ data }) => {
  const getIcon = () => {
    switch (data.type) {
      case 'activity': return <Terminal className="w-10 h-10 text-yellow-400" />;
      case 'checklist': return <CheckCircle className="w-10 h-10 text-green-400" />;
      case 'quote': return <MessageSquareQuote className="w-10 h-10 text-pink-400" />;
      case 'intro': return <Lightbulb className="w-10 h-10 text-indigo-400" />;
      default: return <div className="w-10 h-10 bg-indigo-500 rounded-full animate-pulse" />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-full w-full pt-20 pb-20 px-4 md:px-12 gap-8 items-center justify-center bg-transparent">

      {/* Text Content */}
      <div className="flex-1 space-y-6 max-w-2xl animate-fade-in-up">
        <div className="flex items-center gap-4 mb-2">
          {getIcon()}
          <span className="uppercase tracking-widest text-indigo-400 font-bold text-sm">
            {data.type === 'intro' ? 'Start' : `Module ${data.moduleId}`}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
          {data.title}
        </h1>

        {data.subtitle && (
          <h2 className="text-xl md:text-2xl text-slate-300 font-light italic border-l-4 border-pink-500 pl-4">
            {data.subtitle}
          </h2>
        )}

        <div className="space-y-4 mt-8">
          {data.points.map((point, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="mt-1.5 min-w-[10px] h-[10px] rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              <p className="text-lg md:text-xl text-slate-100 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        {data.type === 'activity' && (
          <div className="mt-8 p-4 bg-yellow-500/20 border border-yellow-500 rounded-lg flex items-center gap-3 animate-bounce-slow">
            <AlertTriangle className="text-yellow-400 w-6 h-6" />
            <span className="text-yellow-200 font-bold uppercase">Action Required: Team Interaction!</span>
          </div>
        )}
      </div>

      {/* Visual Content */}
      <div className="flex-1 h-full flex items-center justify-center">
        <MemeImage keyword={data.imagePrompt} caption={data.imageCaption} />
      </div>

    </div>
  );
};

export default Slide;