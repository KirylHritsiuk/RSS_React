import { fetching } from 'store/slices/Home/HomeSlice';
import useHome from './useHome';
import { useUrl } from './useUrl';

export const useFetching = () => {
  const { url, category } = useUrl();
  const { state, dispatch } = useHome();

  const changePage = (url: string) => {
    dispatch(fetching(url));
  };

  return { state, url, fetching, changePage, dispatch, category };
};
