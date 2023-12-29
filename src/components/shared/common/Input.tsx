import React from 'react';

interface TextInputProps {
  error?: any;
  success?: boolean;
  name: string;
  register: any;
  helperText?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

const TextInput = ({ required, error, success, name, register, helperText, label, placeholder }: TextInputProps) => {

  let inputClasses = 'border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary';
  if (error) {
    inputClasses += ' border-red-500';
  } else if (success) {
    inputClasses += ' border-green-500';
  } else {
    inputClasses += ' border-gray-300';
  }

  return (
    <div>
      {label && <label className="block mb-1">{label}</label>}
      <input
        required={required}
        type="text"
        name={name}
        className={inputClasses}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {!error && helperText && <p className="text-gray-500 text-sm mt-1">{helperText}</p>}
    </div>
  );
};

export default TextInput;
