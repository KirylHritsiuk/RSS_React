import { Category, HomeContext } from './HomeContext';

interface Action {
  type: Category | null;
  payload: Category | null;
}

export const HomeReducer = (state: HomeContext, action: Action) => {
  switch (action.type) {
    case 'character':
      return { ...state, category: action.payload };
    case 'episode':
      return { ...state, category: action.payload };
    case 'location':
      return { ...state, category: action.payload };
    case 'location':
      return { ...state, category: action.payload };
    case null:
      return { ...state, category: action.payload };
    default:
      return { ...state };
  }
};
