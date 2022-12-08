import { FormFields } from '../Form.props';

export const getAvatar = (form: HTMLFormElement & FormFields) => {
  if (form.file.files[0] !== undefined) {
    return URL.createObjectURL(form.file.files[0]);
  }
  return null;
};
