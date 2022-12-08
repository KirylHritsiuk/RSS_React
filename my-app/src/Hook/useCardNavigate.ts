import { HomeContext, initialState } from 'context/home/HomeContext';
import { getCardById } from 'pages/Details/helpers/getCardById';
import { useContext, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const useCardNavigate = () => {
  const { state, dispatch } = useContext(HomeContext);
  const params = useParams();
  const url = useLocation();

  const card = getCardById(params, state);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goHome = () => {
    navigate('/', { replace: true });
    dispatch({ type: 'reset', payload: initialState });
  };

  useEffect(() => {
    if (!card) {
      setTimeout(goHome, 5000);
    }
  }, [url]);
  return { card, goBack, goHome };
};
