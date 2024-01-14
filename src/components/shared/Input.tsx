import { TextField } from '@mui/material';
import React from 'react';

interface InputProps {
  id: string;
  type?: string;
  label: string;
  name: string;
  required?: boolean;
  maxWidth?: string;
  register?: any;
  extraProps?: any;
  inputProps?: {
    endAdornment?: React.ReactNode;
  };
  error?: any;
  fref?: any; // Renamed from fref to ref for consistency with React forwardRef
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((
    {
      id,
      type = 'text',
      label = '',
      name,
      required = false,
      maxWidth = '',
      register,
      error,
      inputProps,
      extraProps,
    }: InputProps,
    ref
  ) => (
    <TextField
      id={id}
      type={type}
      label={label}
      variant='standard'
      fullWidth={!maxWidth}
      InputProps={inputProps}
      error={!!error}
      helperText={error?.message}
      sx={{
        maxWidth: maxWidth || '400px',
      }} 
      inputRef={ref}
      {...(register && register(name, { required }))}
      {...extraProps}
    />
  )
);

Input.displayName = 'Input';

export default Input;
