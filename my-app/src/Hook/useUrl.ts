import { gender, status, HomeContext } from 'context/home/HomeContext';
import { category } from 'interfaces/API';
import { useCallback, useContext } from 'react';
import { useParams } from 'react-router-dom';

export const useUrl = () => {
  const { category } = useParams();
  const { state } = useContext(HomeContext);

  const isCategory = state.category ? state.category : category;
  const nameMain =
    state.filter.name == null || state.filter.name === '' ? '' : `&name=${state.filter.name}`;
  const pageMain = `?page=${state.filter.page}`;
  const status = state.filter.status === 'All' ? '' : `&status=${state.filter.status}`;
  const gender = state.filter.gender === 'All' ? '' : `&gender=${state.filter.gender}`;
  const hasCharacter = category === 'character' ? status + gender : '';

  const url = state.url + isCategory + pageMain + nameMain + hasCharacter;

  const createURL = useCallback(
    (category?: category, page?: number, name?: string, gender?: gender, status?: status) => {
      const isCategory = state.category ? state.category : category;
      const pageQ = page ? `?page=${page}` : pageMain;
      const nameQ = name ? `&name=${name}` : nameMain;
      if (isCategory === 'character') {
        const hasAllInStatus =
          state.filter.status === 'All' ? '' : `&status=${state.filter.status}`;
        const hasAllInGender =
          state.filter.gender === 'All' ? '' : `&gender=${state.filter.gender}`;

        return `${state.url}${isCategory}${pageQ}${nameQ}${
          status ? `&status=${status}` : hasAllInStatus
        }${gender ? `&gender=${gender}` : hasAllInGender}`;
      } else {
        return `${state.url}${isCategory}${pageQ}${nameQ}`;
      }
    },
    [nameMain, pageMain, state.category, state.filter.gender, state.filter.status, state.url]
  );
  return { url, createURL, category };
};
