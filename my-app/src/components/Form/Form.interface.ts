export interface IForm {
  name: string;
  surname: string;
  birthday: string;
  zipCode: string;
  country: string;
  gender: boolean;
  file: File[] | null;
  agree: boolean;
}
