import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col items-center bg-background-light dark:bg-background-dark overflow-x-hidden p-4">
      <div className="flex w-full max-w-md flex-col items-center pt-16 animate-fade-in">
        {/* Logo */}
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-4xl text-background-dark">task_alt</span>
        </div>
        
        {/* Headline */}
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white pb-6 text-center">
          {isLogin ? 'Welcome Back' : 'Create an Account'}
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full">
          {/* Email */}
          <div className="w-full py-2">
            <label className="flex w-full flex-col">
              <p className="pb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Email</p>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="h-12 w-full flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-white p-3 text-base font-normal text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 transition-all"
              />
            </label>
          </div>
          
          {/* Password */}
          <div className="w-full py-2">
            <label className="flex w-full flex-col">
              <p className="pb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Password</p>
              <div className="relative flex w-full flex-1 items-stretch">
                <input 
                  type="password" 
                  placeholder="Enter your password" 
                  className="h-12 w-full flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-white p-3 pr-12 text-base font-normal text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 transition-all"
                />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">visibility</span>
                </button>
              </div>
            </label>
          </div>

          {/* Forgot Password */}
          <div className="w-full pt-1 pb-4">
            <a href="#" className="text-sm font-medium text-primary hover:underline">Forgot Password?</a>
          </div>

          {/* Submit Button */}
          <div className="w-full py-3">
            <Button type="submit" fullWidth>
              {isLogin ? 'Log In' : 'Sign Up'}
            </Button>
          </div>
        </form>

        {/* Separator */}
        <div className="flex w-full items-center gap-4 py-4">
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></div>
          <p className="text-sm text-slate-500 dark:text-slate-400">OR</p>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></div>
        </div>

        {/* Social Login */}
        <div className="flex w-full flex-col space-y-3 py-3">
          <button className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white text-slate-800 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_17_80)"><path d="M47.532 24.5528C47.532 22.9214 47.3896 21.3629 47.1195 19.88H24.239V28.715H37.3397C36.6975 31.6015 34.8532 35.8239 30.4132 38.8088L30.3448 38.8688L38.487 45.0238L38.8184 45.0401C44.2553 40.0988 47.532 33.15 47.532 24.5528Z" fill="#4285F4"></path><path d="M24.239 48.0001C30.8624 48.0001 36.4338 45.8336 40.1884 42.1313L32.4497 36.3313C30.2238 37.8088 27.465 38.7463 24.239 38.7463C18.3315 38.7463 13.3132 34.9663 11.6982 29.8188L11.5797 29.835L3.25391 36.1713L3.13841 36.3538C6.86541 43.4475 14.8814 48.0001 24.239 48.0001Z" fill="#34A853"></path><path d="M11.6982 29.8187C11.2337 28.4062 10.9637 26.9062 10.9637 25.3537C10.9637 23.7901 11.2337 22.2901 11.6707 20.8776L11.6565 20.6726L3.43841 14.4263L3.13841 14.3463C1.19291 18.2613 0 22.6513 0 27.3537C0 32.0562 1.19291 36.4462 3.13841 40.3612L11.6982 29.8187Z" fill="#FBBC05"></path><path d="M24.239 9.96021C28.029 9.96021 31.255 11.2537 33.6748 13.4802L40.3659 6.94521C36.4229 3.28021 30.8624 0.706421 24.239 0.706421C14.8814 0.706421 6.86541 5.25892 3.13841 12.3526L11.6707 22.8951C13.3132 15.7364 18.3315 11.9564 24.239 11.9564" fill="#EA4335"></path></g><defs><clipPath id="clip0_17_80"><rect fill="white" height="48" width="48"></rect></clipPath></defs></svg>
            <span className="text-base font-semibold">Continue with Google</span>
          </button>
          
          <button className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-transparent bg-slate-900 text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M486.06,224H368V105.41a32,32,0,0,0-32-32H288a32,32,0,0,0-32,32V224H134.12c-39.73,0-63.85,39.5-46.7,73.84,30.82,61.64,87.67,112.53,158.46,143.68,14.65,6.4,26.12,5.22,34.42-3.27,9.39-9.68,8.3-24.25-2.22-33.18-12.72-10.8-31-4.8-39.87,1.81-45.2,33.42-83.18,52.48-114.28,52.48-17.68,0-23.36-9.39-23.36-22.34,0-20,13.25-36.42,39.87-49.85,63.1-32,96.63-68.52,111.45-103,13.14-30.82,6.4-55.85,2.77-73.84-2.22-11.35,3.82-20,14.09-21.21,11.35-1.21,20.57,2.43,26.12,14.65,11.35,26.12,5.77,69.15,22.23,98.85,15.22,27.33,43.38,42.11,76.06,43.32,2.22,0,4.44.6,6.65.6,33,0,67.33-19.42,88.24-49.85,13.25-18.82,16.43-38,16.43-55.85A39.46,39.46,0,0,0,486.06,224ZM320,160a32,32,0,0,0,32-32c0-24.25-17-31.42-32-31.42-14.09,0-32,7.17-32,31.42A32,32,0,0,0,320,160Z"></path></svg>
            <span className="text-base font-semibold">Continue with Apple</span>
          </button>
        </div>

        {/* Toggle Mode */}
        <p className="pt-6 pb-4 text-center text-sm text-slate-600 dark:text-slate-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button 
            type="button" 
            onClick={() => setIsLogin(!isLogin)} 
            className="font-semibold text-primary hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;