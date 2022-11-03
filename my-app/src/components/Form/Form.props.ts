import { IFormCard } from 'components/Form/FormCard/FormCard.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  cardList?: IFormCard[] | [];
}

export interface FormFields {
  name: HTMLInputElement;
  surname: HTMLInputElement;
  birthday: HTMLInputElement;
  delivery: HTMLInputElement;
  country: HTMLInputElement;
  gender: HTMLInputElement;
  avatar: HTMLInputElement;
  agree: HTMLInputElement;
}

export interface IState {
  isDirty: boolean;
  name: boolean;
  surname: boolean;
  zipCode: boolean;
  birthday: boolean;
  country: boolean;
  agree: boolean;
  success: boolean;
}
