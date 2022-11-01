import React from 'react';
import { CardProps } from './Card.props';
import { Button, Htag } from 'components';
import styles from './Card.module.css';
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';

export const CardEpisode = ({ data, className }: CardProps) => {
  const url = useLocation();

  return (
    <div className={cn(styles.card, className)}>
      <Htag tag="h2" className={styles.title}>
        {data.name}
      </Htag>
      <p>Air Date: {data.air_date}</p>
      <p>Episode: {data.episode}</p>
      <div className={styles.buttonWrapper}>
        <Button appearance="ghost" className={styles.button}>
          {/* <Link to={`${url.pathname}/${data.id}`}>Show more</Link> */}
        </Button>
      </div>
    </div>
  );
};
