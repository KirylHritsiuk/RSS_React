import { getResponseData } from 'components/CardList/helpers/getResponseData';
import { getPage } from 'components/UI/Pagination/helpers/getPage';
import { CAT, HomeContext } from 'context/home/HomeContext';
import { APIResponse } from 'interfaces/API';
import { useCallback, useContext, useEffect } from 'react';
import { useUrl } from './useUrl';

export const useFetching = <T extends CAT>() => {
  const { state, dispatch } = useContext(HomeContext);
  const { url, category } = useUrl();

  const fetching = useCallback(
    async (urlNew: string = url) => {
      try {
        const response = await fetch(urlNew);
        const res: APIResponse<T> = await response.json();
        const resData = getResponseData<T>(res);
        dispatch({ type: 'fetching', payload: { data: resData } });
        dispatch({ type: 'page', payload: { filter: { page: getPage(resData.prev) } } });
      } catch (error) {
        const myError = error as Error;
        dispatch({ type: 'fetching', payload: { error: myError.message } });
      } finally {
        dispatch({ type: 'loading', payload: { loading: false } });
      }
    },
    [url]
  );

  useEffect(() => {
    fetching();
    return () => dispatch({ type: 'loading', payload: { loading: true } });
  }, [url]);

  const changePage = (url: string) => {
    dispatch({ type: 'loading', payload: { loading: true } });
    fetching(url);
  };

  return { state, fetching, changePage, dispatch, category };
};
