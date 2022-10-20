import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
export interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: FieldError;
  isDirty?: boolean;
  errorMessage?: string;
  reference?: React.RefObject<HTMLInputElement>;
  label?: string;
}
