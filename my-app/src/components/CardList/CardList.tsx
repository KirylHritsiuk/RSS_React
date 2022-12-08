import { Card } from 'components';
import React from 'react';
import { CardListProps } from './CardList.props';
import styles from './CardList.module.css';

export class CardList extends React.Component<CardListProps> {
  render(): React.ReactNode {
    return (
      <div className={styles.cardList}>
        {this.props.catalog.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    );
  }
}
