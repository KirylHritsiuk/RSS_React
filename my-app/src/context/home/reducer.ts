import { CAT, HomeState, init, initialState } from './HomeContext';

export interface Action<T> {
  type: string | null;
  payload: Partial<HomeState<T>>;
}

export const HomeReducer = <T extends CAT>(state: HomeState<T>, action: Action<T>) => {
  const { type, payload } = action;
  switch (type) {
    case 'category':
      if (payload.category !== undefined) {
        return { ...state, category: payload.category };
      }
      return state;
    case 'fetching':
      if (payload.data !== undefined) {
        return { ...state, data: payload.data };
      }
      return state;
    case 'loading':
      if (payload.loading !== undefined) {
        return { ...state, loading: payload.loading };
      }
      return state;
    case 'name':
      if (payload.filter?.name !== undefined) {
        return { ...state, filter: { ...state.filter, name: payload.filter.name } };
      }
      return state;
    case 'page':
      if (payload.filter?.page !== undefined) {
        return { ...state, filter: { ...state.filter, page: payload.filter.page } };
      }
      return state;
    case 'gender':
      if (payload.filter?.gender !== undefined) {
        return {
          ...state,
          filter: {
            ...state.filter,
            gender: payload.filter.gender,
          },
        };
      }
      return state;
    case 'status':
      if (payload.filter?.status !== undefined) {
        return {
          ...state,
          filter: {
            ...state.filter,
            status: payload.filter.status,
          },
        };
      }
      return state;
    case 'reset':
      return Object.assign(state, payload);
    default:
      return state;
  }
};
