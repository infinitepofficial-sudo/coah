import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const GoalSetup: React.FC = () => {
  const navigate = useNavigate();
  const [goal, setGoal] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPlan, setShowPlan] = useState(false);

  const handleGenerate = () => {
    if (!goal) return;
    setIsGenerating(true);
    // Simulate AI delay
    setTimeout(() => {
      setIsGenerating(false);
      setShowPlan(true);
    }, 1500);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white">
      {/* Top App Bar */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm">
        <button onClick={() => navigate(-1)} className="flex size-12 shrink-0 items-center justify-start text-slate-900 dark:text-white">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">New Goal</h2>
        <div className="size-12 shrink-0"></div>
      </div>

      <main className="flex flex-col flex-1 px-4 max-w-lg mx-auto w-full">
        {!showPlan ? (
          <div className="flex flex-col flex-1 animate-fade-in">
             <h1 className="tracking-tight text-[28px] font-bold leading-tight text-left pb-3 pt-5">
              Describe your next big goal.
            </h1>
            
            <div className="flex w-full flex-wrap items-end gap-4 py-3">
              <label className="flex flex-col w-full flex-1">
                <p className="text-slate-500 dark:text-slate-400 text-base font-medium leading-normal pb-2">What's on your mind?</p>
                <textarea 
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="flex w-full resize-none rounded-lg border-none bg-slate-200 dark:bg-[#28392e] placeholder:text-slate-400 dark:placeholder:text-[#9db9a6] p-4 text-base font-normal leading-normal focus:outline-0 focus:ring-2 focus:ring-primary/50 min-h-[200px]"
                  placeholder="e.g., I want to run a 5k in 3 months" 
                ></textarea>
              </label>
            </div>

            <div className="flex-grow"></div>
            
            <div className="py-4 sticky bottom-0">
               <Button onClick={handleGenerate} fullWidth disabled={isGenerating || !goal}>
                {isGenerating ? 'Generating...' : 'Generate Plan'}
               </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col flex-1 animate-slide-up">
            <div className="flex flex-col gap-4 py-6">
              <h3 className="text-xl font-bold">Does this look right?</h3>
              <div className="bg-white dark:bg-[#1f3126] rounded-xl p-5 shadow-sm border border-slate-100 dark:border-white/5">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-lg font-bold flex-1">Run a 5k in 3 Months</h4>
                  <button className="flex items-center gap-1 text-primary text-sm font-semibold hover:opacity-80">
                    <span className="material-symbols-outlined text-base">edit</span>
                    <span>Edit</span>
                  </button>
                </div>
                <ul className="mt-4 space-y-4">
                  {[
                    "Build a consistent running habit (3 times/week).",
                    "Gradually increase running distance each week.",
                    "Incorporate strength training for injury prevention.",
                    "Complete a 5k race by the end of the 3-month period."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                      <span className="text-slate-700 dark:text-slate-200 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex-grow"></div>

            <div className="flex flex-col gap-3 py-4 sticky bottom-0">
              <Button onClick={() => navigate('/dashboard')} fullWidth>
                Looks Good, Let's Go!
              </Button>
              <Button onClick={() => setShowPlan(false)} variant="ghost" fullWidth>
                Start Over
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default GoalSetup;