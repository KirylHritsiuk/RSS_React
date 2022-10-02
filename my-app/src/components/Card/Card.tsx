import React from 'react';
import { CardProps } from './Card.props';
import { Htag } from 'components';
import { ICatalog } from 'dataBase/catalog.interface';
import { Button } from 'components';
import styles from './Card.module.css';
import cn from 'classnames';

export class Card extends React.Component<CardProps> {
  data: ICatalog;

  constructor(props: CardProps) {
    super(props);
    this.data = this.props.data;
  }

  getTitle() {
    return `${this.data.brand} ${this.data.name}`;
  }

  getDescription() {
    return `${this.data.size}″ ${this.data.aspectRatio} ${this.data.resolution} ${this.data.refRate}Hz`;
  }

  getPrice() {
    return `${this.data.price} BYN`;
  }

  render(): React.ReactNode {
    const data = this.props.data;
    return (
      <div className={cn(styles.card, this.props.className)}>
        <div className={styles.image}>
          <img src={data.image} alt={this.data.name} />
        </div>
        <Htag tag="h2" className={styles.title}>
          {this.getTitle()}
        </Htag>
        <div>{this.getDescription()}</div>
        <Htag tag="h3">{this.getPrice()}</Htag>
        <Button appearance="ghost" className={styles.button}>
          BUY
        </Button>
      </div>
    );
  }
}
