import React from 'react';
import { CardProps } from './Card.props';
import { Htag, Modal } from 'components';
import { Button } from 'components';
import styles from './Card.module.css';
import cn from 'classnames';
import { CardState } from './Card.state';

export class CardCharacter extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      modal: false,
    };
  }
  setModal = (data: boolean) => {
    this.setState((prevState) => ({ ...prevState, modal: data }));
  };

  render(): React.ReactNode {
    const data = this.props.data;
    return (
      <>
        <div className={cn(styles.card, this.props.className)} data-testid="cardCharacter">
          <div className={styles.image}>
            <img src={data.image} alt={data.name} />
          </div>
          <Htag tag="h2" className={styles.title}>
            {data.name}
          </Htag>
          <div className={styles.buttonWrapper}>
            <Button
              data-testid="button"
              appearance="ghost"
              className={styles.button}
              onClick={() => this.setState({ modal: true })}
            >
              Show more
            </Button>
          </div>
        </div>
        <Modal
          className={styles.modal}
          visible={this.state.modal}
          setModal={this.setModal}
          data-testid="modal"
        >
          {
            <div className={styles.modalContent}>
              <img src={data.image} alt={data.name} />
              <div>
                <Htag tag="h2">{data.name}</Htag>
                <p>Status: {data.status}</p>
                <p>Species: {data.species}</p>
                <p>Gender: {data.gender}</p>
                <p>Type: {data.type}</p>
                <p>Origin: {data.origin.name}</p>
                <p>Location: {data.location.name}</p>
              </div>
            </div>
          }
        </Modal>
      </>
    );
  }
}
