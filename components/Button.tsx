import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseClasses = "flex items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-base font-bold leading-normal tracking-[0.015em] transition-all active:scale-95";
  
  const variants = {
    primary: "bg-primary text-background-dark hover:opacity-90",
    secondary: "bg-white dark:bg-zinc-800 text-slate-900 dark:text-white border border-slate-200 dark:border-zinc-700",
    outline: "bg-transparent text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:bg-primary/10",
    danger: "bg-red-500 text-white hover:bg-red-600",
    ghost: "bg-transparent text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5"
  };

  const widthClass = fullWidth ? 'w-full' : 'min-w-[84px]';

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      <span className="truncate">{children}</span>
    </button>
  );
};

export default Button;