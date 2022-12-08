import React from 'react';
import { FromCardProps } from './FormCard.props';
import { Htag } from 'components';
import styles from './FormCard.module.css';
import cn from 'classnames';

export const FormCard = ({ className, data }: FromCardProps) => {
  return (
    <div className={cn(styles.card, className)} data-testid="formCard">
      <div className={styles.image}>
        {data.avatar ? (
          <img src={data.avatar} alt={data.name} />
        ) : (
          <img src={'./svg/avatar.svg'} alt={data.name} />
        )}
      </div>
      <Htag tag="h2" className={styles.title}>
        {data.name} {data.surname}
      </Htag>
      <div>{data.birthday}</div>
      <div>{data.gender}</div>
      <div>{data.country}</div>
      <div>{data.zipCode}</div>
    </div>
  );
};
