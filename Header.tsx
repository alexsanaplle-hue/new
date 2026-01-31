
import React from 'react';
import { Film, Zap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-8 px-4 flex flex-col items-center justify-center text-center space-y-4">
      <div className="flex items-center space-x-3 bg-gradient-to-br from-red-500 to-amber-500 p-4 rounded-2xl shadow-lg shadow-red-500/20">
        <Film className="w-8 h-8 text-white" />
        <Zap className="w-8 h-8 text-white animate-pulse" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
        Burmese Movie Recap AI
      </h1>
      <p className="text-slate-400 max-w-2xl">
        Transform any movie transcript or video into a high-octane Burmese recap script and voiceover in seconds.
      </p>
    </header>
  );
};

export default Header;
