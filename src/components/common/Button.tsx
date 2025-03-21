import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
}) => {
  const baseStyles =
    'px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';

  const variantStyles = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
    secondary: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
    outline:
      'bg-white text-purple-600 border border-purple-600 hover:bg-purple-50 focus:ring-purple-500',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
