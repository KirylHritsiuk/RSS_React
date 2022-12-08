import React, { useState } from 'react';
import { Form, FormList } from '../../components';
import { IFormCard } from '../../components/Form/FormCard/FormCard.interface';
import { FormPageProps } from './FormPage.props';

const FormPage = ({}: FormPageProps) => {
  const [formList, setFormList] = useState<IFormCard[] | []>([]);

  const addCard = (card: IFormCard) => {
    setFormList([...formList, card]);
  };
  return (
    <div data-testid="form-page">
      <Form addCard={addCard} title="user form" />
      {formList.length !== 0 && <FormList cards={formList} />}
    </div>
  );
};

export default FormPage;
