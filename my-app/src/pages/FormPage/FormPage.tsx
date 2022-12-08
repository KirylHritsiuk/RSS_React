import { Form, FormList, Htag } from '../../components';
import { FormPageProps } from './FormPage.props';
import styles from './FormPage.module.css';
import { useAppSelector } from 'Hook';

const FormPage = ({}: FormPageProps) => {
  const cards = useAppSelector((state) => state.FormCards.cards);

  return (
    <div className={styles.main}>
      {cards.length !== 0 ? (
        <FormList cards={cards} />
      ) : (
        <Htag tag="h2" className={styles.noCard}>
          NO CARD
        </Htag>
      )}
      <div className={styles.form}>
        <Form title="user form" className={styles.form} />
      </div>
    </div>
  );
};

export default FormPage;
