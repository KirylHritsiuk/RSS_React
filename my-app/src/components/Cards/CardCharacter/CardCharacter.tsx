import { CardProps } from './Card.props';
import { Htag } from 'components';
import { Button } from 'components';
import styles from './Card.module.css';
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';

export const CardCharacter = ({ data, className }: CardProps) => {
  const url = useLocation();

  return (
    <>
      <div className={cn(styles.card, className)}>
        <div className={styles.image}>
          <img src={data.image} alt={data.name} />
        </div>
        <Htag tag="h2" className={styles.title}>
          {data.name}
        </Htag>
        <div className={styles.buttonWrapper}>
          <Button appearance="ghost" className={styles.button}>
            <Link to={`${url.pathname}/${data.id}`}>Show more</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
