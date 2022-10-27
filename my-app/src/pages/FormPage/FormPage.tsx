import { useContext } from 'react';
import { Form, FormList, Htag } from '../../components';
import { FormPageProps } from './FormPage.props';
import styles from './FormPage.module.css';
import { FormContext } from 'context/form/FormContext';

const FormPage = ({}: FormPageProps) => {
  const { cards, addCard } = useContext(FormContext);

  return (
    <div className={styles.main} data-testid="form-page">
      {cards.length !== 0 ? (
        <FormList cards={cards} />
      ) : (
        <Htag tag="h2" className={styles.noCard}>
          NO CARD
        </Htag>
      )}
      <div className={styles.form}>
        <Form addCard={addCard} title="user form" className={styles.form} />
      </div>
    </div>
  );
};

export default FormPage;
