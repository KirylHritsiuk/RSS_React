import { FormCard } from 'components';
import React from 'react';
import { FormListProps } from './FormList.props';
import styles from './FormList.module.css';
import cn from 'classnames';

export const FormList = ({ cards, className }: FormListProps) => {
  return (
    <>
      {cards ? (
        <div className={cn(styles.cardList, className)}>
          {cards.map((card) => (
            <FormCard key={card.id} data={card} />
          ))}
        </div>
      ) : (
        <div className={cn(styles.cardList, className)}></div>
      )}
    </>
  );
};
