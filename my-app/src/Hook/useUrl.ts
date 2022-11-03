import { useAppSelector } from 'Hook';
import { category } from 'interfaces/API';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { gender, status } from 'store/slices/Home/types';

export const useUrl = () => {
  const { category } = useParams();
  const state = useAppSelector((state) => state.Home);

  const isCategory = state.category ? state.category : category;
  const status = state.filter.status === 'All' ? '' : `&status=${state.filter.status}`;
  const gender = state.filter.gender === 'All' ? '' : `&gender=${state.filter.gender}`;
  const hasCharacter = category === 'character' ? status + gender : '';
  const url =
    state.url +
    isCategory +
    `?page=${state.filter.page}` +
    `&name=${state.filter.name}` +
    hasCharacter;

  const createURL = useCallback(
    (category?: category, page?: number, name?: string, gender?: gender, status?: status) => {
      const isCategory = state.category ? state.category : category;
      if (isCategory === 'character') {
        const hasAllInStatus = state.filter.status === 'All' ? '' : state.filter.status;
        const hasAllInGender = state.filter.gender === 'All' ? '' : state.filter.gender;
        return `${state.url}${isCategory}?page=${page ? page : state.filter.page}&name=${
          name ? name : state.filter.name
        }&status=${status ? status : hasAllInStatus}&gender=${gender ? gender : hasAllInGender}`;
      } else {
        return `${state.url}${isCategory}?page=${page ? page : state.filter.page}&name=${
          name ? name : state.filter.name
        }`;
      }
    },
    [
      state.category,
      state.filter.gender,
      state.filter.name,
      state.filter.page,
      state.filter.status,
      state.url,
    ]
  );
  return { url, createURL, category };
};
