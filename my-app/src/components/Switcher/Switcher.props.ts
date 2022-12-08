import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SwitcherProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name?: string;
  reference?: React.RefObject<HTMLInputElement>;
}
