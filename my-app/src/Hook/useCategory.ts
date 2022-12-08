import { category } from 'interfaces/API';
import { useCallback, useEffect } from 'react';
import { redirect, useParams } from 'react-router-dom';
import { updateCategory } from 'store/slices/Home/HomeSlice';
import useHome from './useHome';

export const useCategory = () => {
  const { state, dispatch } = useHome();
  const params = useParams();
  const setCategory = useCallback(
    (category?: category | string) => {
      switch (category) {
        case 'character':
        case 'episode':
        case 'location':
          if (params.category === category) {
            dispatch(updateCategory(category));
          } else {
            redirect('/');
          }
          break;
        default:
          if (category === undefined) {
            dispatch(updateCategory(null));
          }
      }
    },
    [dispatch, params.category]
  );
  useEffect(() => {
    if (
      params.category === 'character' ||
      params.category === 'location' ||
      params.category === 'episode'
    )
      setCategory(params.category);
  }, [params]);

  return { params, state, dispatch, setCategory };
};
