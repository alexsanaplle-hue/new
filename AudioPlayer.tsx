
import React, { useRef, useState } from 'react';
import { Play, Pause, Download, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  url: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ url }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  const onEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={togglePlay}
            className="w-12 h-12 flex items-center justify-center bg-red-500 hover:bg-red-600 transition-colors rounded-full text-white"
          >
            {isPlaying ? <Pause className="fill-current" /> : <Play className="fill-current ml-1" />}
          </button>
          <div>
            <h4 className="font-bold text-white">Recap Narration</h4>
            <p className="text-slate-400 text-sm">Burmese AI Voice (Kore)</p>
          </div>
        </div>
        <a
          href={url}
          download="recap-narration.wav"
          className="p-2 text-slate-400 hover:text-white transition-colors"
          title="Download Audio"
        >
          <Download />
        </a>
      </div>

      <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
        {/* Fix: Removed incorrect backslash before backtick in template literal which caused parser errors */}
        <div
          className="absolute left-0 top-0 h-full bg-red-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>{audioRef.current ? Math.floor(audioRef.current.currentTime) : 0}s</span>
        <div className="flex items-center space-x-1">
          <Volume2 className="w-3 h-3" />
          <span>HD Audio</span>
        </div>
        <span>{audioRef.current ? Math.floor(audioRef.current.duration) || 0 : 0}s</span>
      </div>

      <audio
        ref={audioRef}
        src={url}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
        hidden
      />
    </div>
  );
};

export default AudioPlayer;
