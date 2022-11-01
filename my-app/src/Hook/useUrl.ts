import { gender, status, HomeContext } from 'context/home/HomeContext';
import { category } from 'interfaces/API';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

export const useUrl = () => {
  const { category } = useParams();
  const { state } = useContext(HomeContext);

  const isCategory = state.category ? state.category : category;
  const status = state.filter.status === 'All' ? '' : `&status=${state.filter.status}`;
  const gender = state.filter.gender === 'All' ? '' : `&gender=${state.filter.gender}`;
  const isCharacter = category === 'character' ? status + gender : '';
  const url =
    state.url +
    isCategory +
    `?page=${state.filter.page}` +
    `&name=${state.filter.name}` +
    isCharacter;

  const createURL = (
    category?: category,
    page?: number,
    name?: string,
    gender?: gender,
    status?: status
  ) => {
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
  };
  return { url, createURL };
};
