import { getCardById } from 'pages/Details/helpers/getCardById';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { reset } from 'store/slices/Home/HomeSlice';
import useHome from './useHome';

export const useCardNavigate = () => {
  const { state, dispatch } = useHome();
  const params = useParams();
  const url = useLocation();

  const card = getCardById(params, state);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goHome = () => {
    navigate('/', { replace: true });
    dispatch(reset());
  };

  useEffect(() => {
    if (!card) {
      setTimeout(goHome, 5000);
    }
  }, [url]);
  return { card, goBack, goHome };
};
