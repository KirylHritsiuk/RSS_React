import React, { ChangeEvent, useState } from 'react';
import { name } from 'store/slices/Home/HomeSlice';
import useHome from './useHome';

export const useSearch = () => {
  const { state, dispatch } = useHome();
  const [search, setSearch] = useState<string | undefined>(state.filter.name);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const updateQuery = () => {
    dispatch(name(search ?? ''));
  };

  const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
      dispatch(name(e.currentTarget.value));
    }
  };
  return { search, onInputChange, onSearch, updateQuery };
};
