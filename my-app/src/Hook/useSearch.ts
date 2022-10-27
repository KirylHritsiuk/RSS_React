import { ChangeEvent, useEffect, useState } from 'react';

export const useSearch = (updateQuery: (data: string) => void) => {
  const key = 'search';
  const [search, setSearch] = useState<string>(localStorage.getItem(key) || '');

  useEffect(() => {
    localStorage.setItem(key, search);
    return () => {
      localStorage.setItem(key, search);
    };
  }, [search]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(() => e.target.value);
  };

  const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      updateQuery(search);
      e.currentTarget.blur();
    }
  };
  return { search, setSearch, onInputChange, onSearch };
};
