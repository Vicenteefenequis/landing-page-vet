import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  asLink?: boolean;
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  asLink = false,
  href,
  external,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base";
  
  const variants = {
    primary: "bg-primary-800 text-white hover:bg-primary-900 focus:ring-primary-500 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-primary-900 hover:bg-gray-50 focus:ring-gray-200 border border-gray-200 shadow-sm",
    outline: "border-2 border-primary-800 text-primary-800 hover:bg-primary-50 focus:ring-primary-500",
  };

  const widthStyles = fullWidth ? "w-full" : "";

  const classes = `${baseStyles} ${variants[variant]} ${widthStyles} ${className}`;

  if (asLink && href) {
    return (
      <a 
        href={href} 
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
