import { HomeContext } from 'context/home/HomeContext';
import { category } from 'interfaces/API';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useCategory = () => {
  const { state, dispatch } = useContext(HomeContext);
  const params = useParams();
  const setCategory = (category?: category | string) => {
    switch (category) {
      case 'character':
      case 'episode':
      case 'location':
        if (params.category === category) {
          dispatch({
            type: 'category',
            payload: { category: params.category },
          });
        } else {
          dispatch({
            type: 'category',
            payload: { category: category },
          });
        }
        break;
      default:
        if (category === undefined) {
          dispatch({
            type: 'category',
            payload: { category: null },
          });
        }
    }
  };
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
