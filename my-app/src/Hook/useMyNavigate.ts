import { Character } from 'interfaces/character.interface';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCategory } from './useCategory';

export const useMyNavigate = (card?: Character | null) => {
  const { params, setCategory } = useCategory();
  const url = useLocation();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goHome = () => {
    navigate('/', { replace: true });
    setCategory();
  };

  useEffect(() => {
    if (!card) {
      setTimeout(goHome, 5000);
    }
  }, [url]);
  return { goBack, goHome };
};
