import { Button } from 'components';
import { HomeContext } from 'context/home/HomeContext';
import { useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { DetailsProps } from './Details.props';

const Details = ({}: DetailsProps) => {
  const { category, id } = useParams();
  const data = useContext(HomeContext);
  const url = useLocation();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goHome = () => {
    navigate('/', { replace: true });
    data.setCategory(null);
  };
  console.log('deatils', url);
  return (
    <>
      <Button appearance="primary" onClick={goBack}>
        Go Back
      </Button>
      <Button appearance="ghost" onClick={goHome}>
        Go Home
      </Button>
      <div data-testid="details-page">You open page of card {url.pathname}</div>
    </>
  );
};

export default Details;
