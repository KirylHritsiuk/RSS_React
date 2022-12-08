import React from 'react';
import { CardProps } from './Card.props';
import { Htag } from 'components';
import styles from './Card.module.css';
import cn from 'classnames';

export const CardEpisode = ({ data, className }: CardProps) => {
  return (
    <div className={cn(styles.card, className)} data-testid="cardEpisode">
      <Htag tag="h2" className={styles.title}>
        {data.name}
      </Htag>
      <p>Air Date: {data.air_date}</p>
      <p>Episode: {data.episode}</p>
    </div>
  );
};
