import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  className?: string;
  error?: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  name,
  className = '',
  error,
  id,
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id || name} className="block text-sm font-medium text-purple-700 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? 'border-red-500' : 'border-purple-300'
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
