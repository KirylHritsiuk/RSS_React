import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface SelectProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  error?: boolean;
  isDirty?: boolean;
  errorMessage?: string;
  reference?: React.RefObject<HTMLSelectElement>;
  label?: string;
  valueDisabled?: boolean;
  options: string[];
}
