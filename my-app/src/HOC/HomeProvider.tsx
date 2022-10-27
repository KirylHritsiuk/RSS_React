import { Category } from 'context';
import { HomeContext, state } from 'context/home/HomeContext';
import { HomeReducer } from 'context/home/reducer';
import { ReactNode, useReducer } from 'react';

interface HomeProviderProps {
  children: ReactNode;
}

const HomeProvider = ({ children }: HomeProviderProps) => {
  const [data, dispatch] = useReducer(HomeReducer, state);
  const setCategory = (data: Category | null) => {
    dispatch({ type: data, payload: data });
  };
  return <HomeContext.Provider value={{ ...data, setCategory }}>{children}</HomeContext.Provider>;
};

export default HomeProvider;
