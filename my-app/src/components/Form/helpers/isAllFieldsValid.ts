import { IState } from '../Form.props';

export const isAllFieldsValid = (state: IState) => {
  return Object.entries(state)
    .filter((item) => item[0] !== 'isDirty')
    .every((i) => i[1] === true);
};
