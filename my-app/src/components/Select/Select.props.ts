import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface SelectProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  error?: boolean;
  errorMessage?: string;
  reference?: React.RefObject<HTMLSelectElement>;
  label?: string;
  options: string[];
}

export interface SelectState {
  error?: boolean;
}
