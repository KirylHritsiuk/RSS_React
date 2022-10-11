import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: boolean;
  isDirty?: boolean;
  errorMessage?: string;
  reference?: React.RefObject<HTMLInputElement>;
  label?: string;
}
