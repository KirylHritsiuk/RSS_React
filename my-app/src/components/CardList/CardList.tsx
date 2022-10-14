import { Card, FormCard } from 'components';
import React from 'react';
import { CardListProps } from './CardList.props';
import styles from './CardList.module.css';
export class CardList extends React.Component<CardListProps> {
  render(): React.ReactNode {
    return (
      <>
        {this.props.catalog ? (
          <div className={styles.cardList}>
            {this.props.catalog.map((data) => {
              if ('brand' in data) {
                return <Card key={data.id} data={data} />;
              } else {
                return <FormCard key={data.id} data={data} />;
              }
            })}
          </div>
        ) : (
          <div className={styles.cardList}></div>
        )}
      </>
    );
  }
}
