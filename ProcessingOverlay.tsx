
import React from 'react';
import { ProcessingStatus } from '../types';
import { Loader2, Clapperboard, AudioLines, Sparkles } from 'lucide-react';

interface ProcessingOverlayProps {
  status: ProcessingStatus;
}

const ProcessingOverlay: React.FC<ProcessingOverlayProps> = ({ status }) => {
  if (status === ProcessingStatus.IDLE || status === ProcessingStatus.COMPLETED || status === ProcessingStatus.ERROR) {
    return null;
  }

  const getStatusText = () => {
    switch (status) {
      case ProcessingStatus.PROCESSING:
        return "Analyzing content...";
      case ProcessingStatus.GENERATING_SCRIPT:
        return "Writing viral Burmese script...";
      case ProcessingStatus.GENERATING_AUDIO:
        return "Producing AI narration...";
      default:
        return "Thinking...";
    }
  };

  const getIcon = () => {
    switch (status) {
      case ProcessingStatus.PROCESSING:
        return <Clapperboard className="w-12 h-12 text-red-500 animate-bounce" />;
      case ProcessingStatus.GENERATING_SCRIPT:
        return <Sparkles className="w-12 h-12 text-amber-500 animate-pulse" />;
      case ProcessingStatus.GENERATING_AUDIO:
        return <AudioLines className="w-12 h-12 text-blue-500 animate-pulse" />;
      default:
        return <Loader2 className="w-12 h-12 text-white animate-spin" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-6">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 max-w-sm w-full shadow-2xl flex flex-col items-center space-y-6">
        {getIcon()}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-white">{getStatusText()}</h3>
          <p className="text-slate-500 text-sm">Gemini is working its magic...</p>
        </div>
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-amber-500 h-full animate-progress-indeterminate"></div>
        </div>
      </div>
      <style>{`
        @keyframes progress-indeterminate {
          0% { transform: translateX(-100%); width: 30%; }
          50% { width: 30%; }
          100% { transform: translateX(350%); width: 30%; }
        }
        .animate-progress-indeterminate {
          animation: progress-indeterminate 2s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default ProcessingOverlay;
