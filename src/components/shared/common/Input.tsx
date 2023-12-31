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

  let inputClasses = 'border rounded-[1vh] px-[1.3vh] py-[1vh] text-[2dvh] focus:outline-none focus:ring-[.2vh] focus:ring-primary';
  if (error) {
    inputClasses += ' border-red-500';
  } else if (success) {
    inputClasses += ' border-green-500';
  } else {
    inputClasses += ' border-gray-300';
  }

  return (
    <>
      {label && <label className="block mb-[1vh]">{label}</label>}
      <input
        required={required}
        type="text"
        name={name}
        className={inputClasses}
        placeholder={`${placeholder}${required ? '*' : ''}`}
        {...register(name)}
      />
      {error && <p className="text-red-500 text-[2vh] mt-[1vh]">{error}</p>}
      {!error && helperText && <p className="text-gray-500 text-[1.5dvh]">{helperText}</p>}
    </>
  );
};

export default TextInput;
