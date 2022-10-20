import React from 'react';
import { CardProps } from './Card.props';
import { Htag } from 'components';
import styles from './Card.module.css';
import cn from 'classnames';

export const CardLocation = ({ data, className }: CardProps) => {
  return (
    <div className={cn(styles.card, className)} data-testid="cardLocation">
      <Htag tag="h2" className={styles.title}>
        {data.name}
      </Htag>
      <p>Types: {data.type}</p>
      <p>Species: {data.dimension}</p>
    </div>
  );
};
