import { CAT, HomeContext, HomeState, init, initialState } from 'context/home/HomeContext';
import { Action, HomeReducer } from 'context/home/reducer';
import React, { ReactNode, Reducer, useReducer } from 'react';

interface HomeProviderProps {
  children: ReactNode;
}

const HomeProvider = ({ children }: HomeProviderProps) => {
  const [state, dispatch] = useReducer<Reducer<HomeState<CAT>, Action<CAT>>>(
    HomeReducer,
    initialState
  );

  return <HomeContext.Provider value={{ state, dispatch }}>{children}</HomeContext.Provider>;
};

export default HomeProvider;
