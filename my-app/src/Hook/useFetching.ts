import { useEffect } from 'react';
import { fetching } from 'store/slices/Home/HomeSlice';
import useHome from './useHome';
import { useUrl } from './useUrl';

export const useFetching = () => {
  const { url, category } = useUrl();
  const { state, dispatch } = useHome();

  useEffect(() => {
    dispatch(fetching(url));
  }, [url, dispatch]);

  const changePage = (url: string) => {
    dispatch(fetching(url));
  };

  return { state, fetching, changePage, dispatch, category };
};
