import { Button, Htag } from 'components';
import { HomeContext } from 'context/home/HomeContext';
import { useContext } from 'react';
import { getCardById } from './helpers/getCardById';
import styles from './Details.module.css';
import { Timer } from 'components/UI/Timer/Timer';
import { useMyNavigate } from 'Hook/useMyNavigate';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { state } = useContext(HomeContext);
  const params = useParams();
  const card = getCardById(params, state);
  const { goBack, goHome } = useMyNavigate(card);

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
              <li>location: {card.origin.name}</li>
            </ul>
          </>
        ) : (
          <>
            <Htag tag="h2">Sorry this card not here!</Htag>
            <Htag tag="h3">
              Redirect to Home from <Timer time={5} />
            </Htag>
          </>
        )}
      </div>
    </div>
  );
};

export default Details;
