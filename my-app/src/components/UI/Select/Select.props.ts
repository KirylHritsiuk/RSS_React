import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
export interface SelectProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  error?: FieldError;
  isDirty?: boolean;
  errorMessage?: string;
  reference?: React.RefObject<HTMLSelectElement>;
  label?: string;
  valueDisabled?: boolean;
  options: string[];
}
