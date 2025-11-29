import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col font-display overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="flex flex-col flex-1 justify-between">
        <div className="flex-grow">
          {/* HeaderImage */}
          <div className="@container">
            <div className="@[480px]:px-4 @[480px]:py-3 p-4">
              <div 
                className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-background-light dark:bg-background-dark @[480px]:rounded-xl rounded-lg min-h-80 shadow-inner" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-Vh2buSNnPVido7uHNiZN1ZuInT4zUVUNk7-W61r6f8Qe1VIVaTHplaFHWB4teKahIvvLADgaEemcqJp3f4WTj_I1phjE6W7rjEpB4a0-mW87lUQyaYqMfuAacjI3YMDqmquuYbuWIXHXY-0AYL9u02OEJHIhJGLlXE5sbmE1it43LlyFuLgbNV2Do-tcMWP0T_E0U_LnsLyAQFw_Qv-4V__MHkGCjuHIt6b2qbnKrtay04S3VFAklHsFAQ5aTWUuGy5x59YwldSb")'}}
              ></div>
            </div>
          </div>
          
          {/* HeadlineText */}
          <h1 className="text-slate-900 dark:text-white tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
            Conquer Your Day
          </h1>
          
          {/* BodyText */}
          <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
            The simplest way to manage tasks, track progress, and build good habits.
          </p>
          
          {/* TextGrid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-1 gap-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 flex-col">
              <span className="material-symbols-outlined text-primary text-2xl">list_alt</span>
              <div className="flex flex-col gap-1">
                <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight">Effortless Organization</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Easily manage all your tasks.</p>
              </div>
            </div>
            
            <div className="flex flex-1 gap-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 flex-col">
              <span className="material-symbols-outlined text-primary text-2xl">notifications_active</span>
              <div className="flex flex-col gap-1">
                <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight">Smart Reminders</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Never miss a deadline again.</p>
              </div>
            </div>
            
            <div className="flex flex-1 gap-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 flex-col">
              <span className="material-symbols-outlined text-primary text-2xl">monitoring</span>
              <div className="flex flex-col gap-1">
                <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight">Visualize Progress</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">See your achievements at a glance.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* ButtonGroup */}
        <div className="flex justify-center pb-6">
          <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
            <Button onClick={() => navigate('/onboarding')} fullWidth>
              Get Started
            </Button>
            <Button onClick={() => navigate('/auth')} variant="outline" fullWidth>
              I Already Have an Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;