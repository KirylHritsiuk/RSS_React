import { HomeContext } from 'context/home/HomeContext';
import React, { ChangeEvent, useContext, useState } from 'react';

export const useSearch = () => {
  const { state, dispatch } = useContext(HomeContext);
  const [search, setSearch] = useState<string | undefined>(state.filter.name);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const updateQuery = () => {
    dispatch({ type: 'name', payload: { filter: { name: search } } });
  };

  const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch({ type: 'name', payload: { filter: { name: e.currentTarget.value } } });
      e.currentTarget.blur();
    }
  };
  return { search, onInputChange, onSearch, updateQuery };
};
