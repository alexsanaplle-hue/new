
export enum ProcessingStatus {
  IDLE = 'IDLE',
  PROCESSING = 'PROCESSING',
  GENERATING_SCRIPT = 'GENERATING_SCRIPT',
  GENERATING_AUDIO = 'GENERATING_AUDIO',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR'
}

export interface RecapResult {
  script: string;
  audioUrl?: string;
  originalFileName?: string;
  voiceSelected?: string;
}

export type VoiceOption = {
  id: 'Kore' | 'Puck' | 'Charon' | 'Zephyr' | 'Fenrir';
  label: string;
  gender: 'Male' | 'Female';
  description: string;
};

export const AVAILABLE_VOICES: VoiceOption[] = [
  { id: 'Kore', label: 'Kore', gender: 'Male', description: 'Deep, resonant, professional' },
  { id: 'Charon', label: 'Charon', gender: 'Male', description: 'Energetic, dramatic' },
  { id: 'Fenrir', label: 'Fenrir', gender: 'Male', description: 'Calm, steady narrator' },
  { id: 'Puck', label: 'Puck', gender: 'Female', description: 'Friendly, clear storyteller' },
  { id: 'Zephyr', label: 'Zephyr', gender: 'Female', description: 'Expressive, cinematic' },
];
