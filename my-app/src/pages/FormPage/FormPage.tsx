import React from 'react';
import { Form, FormList } from '../../components';
import { IFormCard } from '../../components/Form/FormCard/FormCard.interface';
import { FormPageProps } from './FormPage.props';
import { FormPageState } from './FormPage.state';

class FormPage extends React.Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);
    this.state = {
      cardList: [],
    };
  }

  addCard = (card: IFormCard) => {
    this.setState({ cardList: [...this.state.cardList, card] });
  };

  render() {
    const { cardList } = this.state;
    return (
      <div data-testid="form-page">
        <Form addCard={this.addCard} title="user form" />
        {cardList.length !== 0 && <FormList data={cardList} />}
      </div>
    );
  }
}

export default FormPage;
