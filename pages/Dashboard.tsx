import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { name } = useUser();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark pb-28 font-display text-slate-900 dark:text-white">
      {/* Top App Bar */}
      <div className="flex items-center p-4 pb-2 justify-between">
        <div className="flex size-12 shrink-0 items-center">
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20" 
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmCSHx_zavOyWHS0Xt9n7oxGgwCT8s603turwnpmuQ03EVJHGmBPBvJS-wr3muOx-aY4TXXGHa3e-bAUYXDFXInZBIRW5DtZKBhYdyxavrKJb_8WdIlGZxoEj65UdDtNPsCHYl99WsthrVVG3ICrGK0sdlCcDznX7E8vCBZ4N9ZuHqVm5wd-mVQIxP4YLjauoWRI2nhbhO2Un8-4xH7cylBHe-0tI1vX9WYvYtDevGokTFypNPhDztH4hMGwjStlgVZjJei9FVNt5x")'}}
          ></div>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 px-3 truncate">
          Good Morning, {name}
        </h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center rounded-lg h-10 w-10 text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </div>

      {/* Date */}
      <p className="text-slate-600 dark:text-zinc-400 text-base font-normal leading-normal px-4">Thursday, 24 Oct</p>

      {/* Progress Section */}
      <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">Your Progress</h3>
      <div className="mx-4 p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-slate-100 dark:border-white/5">
        <div className="flex flex-col gap-3">
          <div className="flex gap-6 justify-between items-center">
            <p className="font-medium">Tasks Completed Today</p>
            <p className="text-sm">3/8</p>
          </div>
          <div className="rounded-full bg-slate-100 dark:bg-background-dark h-2 w-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{width: '37.5%'}}></div>
          </div>
          <p className="text-slate-500 dark:text-zinc-400 text-sm">Keep it up!</p>
        </div>
      </div>

      {/* Upcoming Tasks Section */}
      <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">Upcoming Tasks</h3>
      <div className="flex flex-col gap-3 px-4">
        <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-slate-100 dark:border-white/5 cursor-pointer hover:bg-slate-50 dark:hover:bg-zinc-800/80 transition-colors group">
          <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary/20">
             <div className="w-3 h-3 bg-transparent rounded-full"></div>
          </div>
          <div className="flex-1">
            <p className="font-medium">Finalize project proposal</p>
            <p className="text-slate-500 dark:text-zinc-400 text-sm">Due Today, 4:00 PM</p>
          </div>
          <div className="bg-red-500/10 dark:bg-red-500/20 px-2 py-0.5 rounded-full">
            <p className="text-xs font-medium text-red-600 dark:text-red-500">High</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-slate-100 dark:border-white/5 cursor-pointer hover:bg-slate-50 dark:hover:bg-zinc-800/80 transition-colors group">
          <div className="w-6 h-6 rounded-full border-2 border-slate-300 dark:border-zinc-600 group-hover:border-primary transition-colors"></div>
          <div className="flex-1">
            <p className="font-medium">Call with the design team</p>
            <p className="text-slate-500 dark:text-zinc-400 text-sm">Due Today, 5:30 PM</p>
          </div>
          <div className="bg-amber-500/10 dark:bg-amber-500/20 px-2 py-0.5 rounded-full">
            <p className="text-xs font-medium text-amber-600 dark:text-amber-500">Medium</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-slate-100 dark:border-white/5 cursor-pointer hover:bg-slate-50 dark:hover:bg-zinc-800/80 transition-colors group">
          <div className="w-6 h-6 rounded-full border-2 border-slate-300 dark:border-zinc-600 group-hover:border-primary transition-colors"></div>
          <div className="flex-1">
            <p className="font-medium">Review Q3 performance report</p>
            <p className="text-slate-500 dark:text-zinc-400 text-sm">Due Tomorrow</p>
          </div>
        </div>
      </div>

      {/* Recent Achievements */}
      <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">Recent Achievements</h3>
      <div className="pl-4">
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex-shrink-0 w-40 flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-slate-100 dark:border-white/5">
            <span className="material-symbols-outlined text-primary text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>local_fire_department</span>
            <p className="font-medium text-sm">5-Day Streak!</p>
            <p className="text-slate-500 dark:text-zinc-400 text-xs text-center">Completed tasks 5 days in a row</p>
          </div>
          <div className="flex-shrink-0 w-40 flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-slate-100 dark:border-white/5">
            <span className="material-symbols-outlined text-primary text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>workspace_premium</span>
            <p className="font-medium text-sm">Project 'X' Done</p>
            <p className="text-slate-500 dark:text-zinc-400 text-xs text-center">Finished all tasks in the project</p>
          </div>
           <div className="flex-shrink-0 w-40 flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-slate-100 dark:border-white/5">
            <span className="material-symbols-outlined text-primary text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
            <p className="font-medium text-sm">Perfect Week</p>
            <p className="text-slate-500 dark:text-zinc-400 text-xs text-center">100% task completion last week</p>
          </div>
          <div className="w-4"></div>
        </div>
      </div>

      {/* FAB */}
      <button 
        onClick={() => navigate('/call')}
        className="fixed bottom-24 right-4 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-primary text-background-dark shadow-lg shadow-primary/30 hover:scale-105 transition-transform active:scale-95 z-20"
      >
        <span className="material-symbols-outlined text-4xl">add</span>
      </button>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-t border-slate-200 dark:border-zinc-800 z-10">
        <div className="flex h-full items-center justify-around max-w-lg mx-auto">
          <a href="#" className="flex flex-col items-center justify-center gap-1 text-primary w-full h-full">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
            <span className="text-xs font-bold">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white w-full h-full transition-colors">
            <span className="material-symbols-outlined">folder</span>
            <span className="text-xs">Projects</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white w-full h-full transition-colors">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="text-xs">Calendar</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center gap-1 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white w-full h-full transition-colors">
            <span className="material-symbols-outlined">person</span>
            <span className="text-xs">Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;