import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ActiveCall: React.FC = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaker, setIsSpeaker] = useState(true);

  // Timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="relative flex h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display overflow-hidden text-slate-900 dark:text-white">
      {/* TopAppBar */}
      <div className="flex items-center bg-transparent p-4 pb-2 justify-between shrink-0 z-10">
        <button onClick={() => navigate('/dashboard')} className="flex size-12 shrink-0 items-center justify-start text-slate-600 dark:text-white/80 hover:bg-white/10 rounded-full">
          <span className="material-symbols-outlined !text-3xl">keyboard_arrow_down</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Active Call</h2>
        <div className="flex w-12 items-center justify-end">
          <button onClick={() => navigate('/dashboard')} className="text-primary text-base font-bold leading-normal tracking-[0.015em] shrink-0">Done</button>
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-between">
        <div className="flex flex-col items-center mt-8">
          {/* Profile Header */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-110 animate-pulse"></div>
            <div 
              className="relative w-40 h-40 bg-center bg-no-repeat bg-cover rounded-full border-4 border-background-light dark:border-background-dark shadow-2xl" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCX_m9ZVkfLXuIFU8k2ilvO5h8tDhm72EWs_OIgshqZVrsjcyW0DRJoqIPcEIgqfsVAubPF_wEoC9eTAQ37OiiRj9eL7upCUbkXC5YWO0uPYX54oGRv0MAiq6SE2uZus3hqaTWGy3-E2FrjYyJ9B42Y2SeSG3XaMPBxi_pN-eXmHLlL-kZu5U5iq8Ci43D9WvOLmt7leOffKKTeBGlLRsYTWtF2r9DovEvx8lyKTDNCsb1HBeAg7Jfc6iEOBaVdjkTaquvKkPWwJsLC")'}}
            ></div>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-1">
            <h2 className="text-[26px] font-bold leading-tight tracking-[-0.015em] text-center">Jordan Smith</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-normal text-center">Productivity Coach</p>
          </div>

          {/* Timer */}
          <h1 className="text-6xl font-bold leading-tight tracking-tighter px-4 text-center pt-8 tabular-nums">
            {formatTime(seconds)}
          </h1>
          
          {/* Status */}
          <div className="flex items-center gap-2 pt-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <p className="text-primary text-sm font-semibold tracking-wide uppercase">Connected</p>
          </div>

          {/* Transcription Placeholder */}
          <div className="mt-12 px-8 w-full max-w-md text-center">
            <p className="text-slate-600 dark:text-slate-300 text-lg font-medium leading-relaxed italic opacity-80 animate-pulse">
              "Let's focus on prioritizing that project proposal first..."
            </p>
          </div>
        </div>

        {/* Action Button Bar */}
        <div className="w-full p-6 pb-12 flex items-center justify-around gap-4 shrink-0 max-w-md mx-auto">
          <div className="flex flex-col items-center gap-2">
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className={`flex items-center justify-center size-16 rounded-full transition-colors ${isMuted ? 'bg-white text-slate-900' : 'bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white'}`}
            >
              <span className="material-symbols-outlined !text-3xl">{isMuted ? 'mic_off' : 'mic'}</span>
            </button>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Mute</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <button 
              onClick={() => setIsSpeaker(!isSpeaker)}
              className={`flex items-center justify-center size-16 rounded-full transition-colors ${isSpeaker ? 'bg-white text-slate-900' : 'bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white'}`}
            >
              <span className="material-symbols-outlined !text-3xl">{isSpeaker ? 'volume_up' : 'volume_off'}</span>
            </button>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Speaker</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <button className="flex items-center justify-center size-16 rounded-full bg-primary text-background-dark hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined !text-3xl">add_task</span>
            </button>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Add Task</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <button 
              onClick={() => navigate('/dashboard')}
              className="flex items-center justify-center size-16 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20"
            >
              <span className="material-symbols-outlined !text-3xl">call_end</span>
            </button>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">End</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveCall;