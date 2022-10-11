import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CardList, Form } from '../components';
import { IFormCard } from '../components/FormCard/FormCard.interface';

class FormPage extends React.Component {
  constructor(props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
    super(props);
  }
  state = {
    cardList: [],
  };

  addCard = (prevState: IFormCard[] | [], card: IFormCard) => {
    this.setState({ cardList: [...prevState, card] });
  };

  render() {
    const { cardList } = this.state;
    return (
      <div data-testid={'form-page'}>
        <Form cardList={cardList} addCard={this.addCard} />
        {cardList.length !== 0 && <CardList catalog={cardList} />}
      </div>
    );
  }
}

export default FormPage;
