import { Button, Htag } from 'components';
import { HomeContext } from 'context/home/HomeContext';
import { useCategory } from 'Hook/useCategory';
import { useContext } from 'react';
import { redirect, useLocation, useNavigate } from 'react-router-dom';
import { getCardById } from './helpers/getCardById';
import styles from './Details.module.css';

const Details = () => {
  const { params, setCategory } = useCategory();
  const { state } = useContext(HomeContext);
  const card = getCardById(params, state);
  const url = useLocation();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goHome = () => {
    navigate('/', { replace: true });
    setCategory(undefined);
  };
  console.log('deatils', url);
  return (
    <div className={styles.main}>
      <div className={styles.buttons}>
        <Button appearance="primary" onClick={goBack}>
          Go Back
        </Button>
        <Button appearance="ghost" onClick={goHome}>
          Go Home
        </Button>
      </div>
      <div className={styles.card}>
        {card ? (
          <>
            <img src={`${card.image}`} alt={`${card.name}`} />
            <ul>
              <li>
                <Htag tag="h2">{card.name}</Htag>
              </li>
              <li>gender: {card.gender}</li>
              <li>status: {card.status}</li>
              <li>species: {card.species}</li>
              <li>type: {card.type}</li>
              <li>origin: {card.origin.name}</li>
              <li>You open page of card {url.pathname}</li>
            </ul>
          </>
        ) : (
          // redirect('/')
          <></>
        )}
      </div>
    </div>
  );
};

export default Details;
