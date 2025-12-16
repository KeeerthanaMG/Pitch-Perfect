import React from 'react';

interface MemeImageProps {
  imageUrl: string;
  caption?: string;
}

const MemeImage: React.FC<MemeImageProps> = ({ imageUrl, caption }) => {
  return (
    <div className="relative group w-full h-full max-h-[50vh] md:max-h-full flex flex-col justify-center items-center p-4">
      <div className="relative transform rotate-1 group-hover:rotate-0 transition-transform duration-500 ease-in-out border-4 border-white bg-white shadow-2xl p-2 rounded-sm">
        <img
          src={imageUrl}
          alt={caption || 'Hackathon scene'}
          className="object-cover h-64 md:h-96 w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
          loading="lazy"
        />
        {caption && (
          <div className="mt-2 text-center font-bold text-slate-800 text-lg font-mono uppercase tracking-tighter">
            {caption}
          </div>
        )}

        {/* Tape effect */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-yellow-200 opacity-80 rotate-3 shadow-sm"></div>
      </div>
    </div>
  );
};

export default MemeImage;