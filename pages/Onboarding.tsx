import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useUser } from '../context/UserContext';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const { name, setName } = useUser();
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      navigate('/goal-setup');
    }
  };

  const handleSkip = () => {
     if (step < totalSteps) {
      setStep(step + 1);
    } else {
      navigate('/goal-setup');
    }
  };

  const ProgressDots = () => (
    <div className="flex w-full flex-row items-center justify-center gap-3 py-5">
      {[1, 2, 3, 4].map((s) => (
        <div 
          key={s} 
          className={`h-2 w-2 rounded-full transition-colors duration-300 ${s <= step ? 'bg-primary' : 'bg-primary/20'}`}
        ></div>
      ))}
    </div>
  );

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col p-6 dark bg-background-light dark:bg-background-dark overflow-x-hidden antialiased">
      <div className="flex flex-col flex-1 max-w-lg mx-auto w-full">
        <ProgressDots />
        
        <div className="flex-grow flex flex-col justify-center animate-fade-in">
          {step === 1 && (
            <>
              <h1 className="text-slate-900 dark:text-white tracking-light text-[32px] font-bold leading-tight text-left pb-3 pt-6">
                Welcome! What should we call you?
              </h1>
              <div className="flex w-full flex-wrap items-end gap-4 py-3">
                <label className="flex flex-col w-full flex-1">
                  <p className="text-slate-800 dark:text-white text-base font-medium leading-normal pb-2">Name</p>
                  <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="flex w-full resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary/50 dark:focus:border-primary/50 h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-4 text-base font-normal leading-normal transition-all"
                    placeholder="Enter your name"
                  />
                </label>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-slate-900 dark:text-white tracking-light text-[32px] font-bold leading-tight text-left pb-2 pt-6">
                What are your main goals?
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pb-6">
                Select a few categories to get started.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'fitness_center', label: 'Health', active: true },
                  { icon: 'work', label: 'Career', active: false },
                  { icon: 'local_library', label: 'Learning', active: false },
                  { icon: 'payments', label: 'Finance', active: true },
                  { icon: 'home', label: 'Home', active: false },
                  { icon: 'self_improvement', label: 'Personal', active: false },
                ].map((item) => (
                  <button 
                    key={item.label}
                    className={`flex items-center justify-start gap-3 p-4 rounded-lg border-2 transition-all ${item.active ? 'border-primary bg-primary/20 text-slate-900 dark:text-white' : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                  >
                    <span className="material-symbols-outlined">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h1 className="text-slate-900 dark:text-white tracking-light text-[32px] font-bold leading-tight text-left pb-2 pt-6">
                How should we talk to you?
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pb-6">
                Choose your preferred tone for reminders.
              </p>
              <div className="space-y-4">
                {['Friendly & Encouraging', 'Short & Direct', 'Minimalist'].map((tone, idx) => (
                  <button 
                    key={tone}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${idx === 1 ? 'border-primary bg-primary/20 text-slate-900 dark:text-white' : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                  >
                    <p className="font-medium">{tone}</p>
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <h1 className="text-slate-900 dark:text-white tracking-light text-[32px] font-bold leading-tight text-left pb-2 pt-6">
                When are you most productive?
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pb-8">
                Set your schedule so we don't bother you during downtime.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <p className="text-slate-800 dark:text-white text-base font-medium">Start Time</p>
                  <input 
                    type="time" 
                    defaultValue="09:00"
                    className="rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary/50 dark:focus:border-primary/50 placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium p-2"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-slate-800 dark:text-white text-base font-medium">End Time</p>
                  <input 
                    type="time" 
                    defaultValue="17:00"
                    className="rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary/50 dark:focus:border-primary/50 placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium p-2"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-auto pt-6">
          <p 
            onClick={handleSkip}
            className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal pb-3 pt-1 text-center underline cursor-pointer hover:text-primary"
          >
            {step === 4 ? "Do this later" : "Skip for now"}
          </p>
          <div className="flex py-3">
            <Button onClick={handleNext} fullWidth>
              {step === 4 ? "Finish" : "Continue"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;