import { Button, Htag } from 'components';
import styles from './Details.module.css';
import { Timer } from 'components/UI/Timer/Timer';
import { useCardNavigate } from 'Hook/useCardNavigate';

const Details = () => {
  const { card, goBack, goHome } = useCardNavigate();

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
            {'gender' in card && <img src={`${card.image}`} alt={`${card.name}`} />}
            <ul>
              <li>
                <Htag tag="h2">{card.name}</Htag>
              </li>
              {'gender' in card && (
                <>
                  <li>gender: {card.gender}</li>
                  <li>status: {card.status}</li>
                  <li>species: {card.species}</li>
                  {card.type !== '' && <li>type: {card.type}</li>}
                  <li>location: {card.location.name}</li>
                  <li>origin: {card.origin.name}</li>
                </>
              )}
              {'air_date' in card && (
                <>
                  <li>episode: {card.episode}</li>
                  <li>air date: {card.air_date}</li>
                </>
              )}
              {'dimension' in card && (
                <>
                  <li>dimension: {card.dimension}</li>
                  <li>type: {card.type}</li>
                </>
              )}
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
