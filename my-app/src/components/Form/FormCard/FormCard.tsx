import React from 'react';
import { FromCardProps } from './FormCard.props';
import { Htag } from 'components';
import styles from './FormCard.module.css';
import cn from 'classnames';
import { IFormCard } from 'components/Form/FormCard/FormCard.interface';

export class FormCard extends React.Component<FromCardProps> {
  data: IFormCard;

  constructor(props: FromCardProps) {
    super(props);
    this.data = this.props?.data;
  }

  render(): React.ReactNode {
    const data = this.props.data;
    return (
      <div className={cn(styles.card, this.props.className)} data-testid="FormCard">
        <div className={styles.image}>
          {data.avatar ? (
            <img src={data.avatar} alt={this.data.name} />
          ) : (
            <img src={'./svg/avatar.svg'} alt={this.data.name} />
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
  }
}
