import { gender, status } from 'context/home/HomeContext';
import { useFetching } from './useFetching';
import { useUrl } from './useUrl';

export const useUpdateFilter = () => {
  const { state, changePage, dispatch, category } = useFetching();
  const { url, createURL } = useUrl();

  const updateFilter = (e: React.ChangeEvent<HTMLInputElement>, label: 'status' | 'gender') => {
    const item = e.target.value as gender | status;
    dispatch({
      type: label,
      payload: { filter: { [label]: item } },
    });

    switch (label) {
      case 'gender':
        if (e.target.value !== 'All') {
          const urlGender = createURL(undefined, undefined, undefined, item as gender);
          changePage(urlGender);
          break;
        }
        changePage(createURL());
        break;

      case 'status':
        if (e.target.value !== 'All') {
          const urlStatus = createURL(undefined, undefined, undefined, undefined, item as status);
          changePage(urlStatus);
          break;
        }
        changePage(createURL());
        break;

      default:
        changePage(url);
    }
  };
  return { state, updateFilter, category };
};
