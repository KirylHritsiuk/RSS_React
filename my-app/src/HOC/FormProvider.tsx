import { IFormCard } from 'components/Form/FormCard/FormCard.interface';
import { FormContext, state } from 'context/form/FormContext';
import { fromReducer } from 'context/form/reducer';
import { ReactNode, useReducer } from 'react';

interface FormProviderProps {
  children: ReactNode;
}

const MyFormProvider = ({ children }: FormProviderProps) => {
  const [cards, dispatch] = useReducer(fromReducer, state);

  const addCard = (card: IFormCard) => {
    dispatch({ type: 'add', payload: card });
  };
  return <FormContext.Provider value={{ ...cards, addCard }}>{children}</FormContext.Provider>;
};

export default MyFormProvider;
