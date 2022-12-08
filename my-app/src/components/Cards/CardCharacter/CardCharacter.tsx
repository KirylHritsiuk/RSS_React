import React, { useState } from 'react';
import { CardProps } from './Card.props';
import { Htag, Modal } from 'components';
import { Button } from 'components';
import styles from './Card.module.css';
import cn from 'classnames';

export const CardCharacter = ({ data, className }: CardProps) => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <>
      <div className={cn(styles.card, className)} data-testid="cardCharacter">
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
            onClick={() => setModal(true)}
          >
            Show more
          </Button>
        </div>
      </div>
      <Modal className={styles.modal} visible={modal} setModal={setModal} data-testid="modal">
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
};
