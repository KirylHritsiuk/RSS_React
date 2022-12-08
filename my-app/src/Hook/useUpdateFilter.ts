import { updateGender, updateStatus } from 'store/slices/Home/HomeSlice';
import { gender, status } from 'store/slices/Home/types';
import { useFetching } from './useFetching';
import { useUrl } from './useUrl';

export const useUpdateFilter = () => {
  const { state, changePage, dispatch, category } = useFetching();
  const { url, createURL } = useUrl();

  const updateFilter = (e: React.ChangeEvent<HTMLInputElement>, label: 'status' | 'gender') => {
    const item = e.target.value as gender | status;

    switch (label) {
      case 'gender':
        dispatch(updateGender(item as gender));
        if (e.target.value !== 'All') {
          const urlGender = createURL(undefined, undefined, undefined, item as gender);
          changePage(urlGender);
          break;
        }
        changePage(createURL());
        break;

      case 'status':
        dispatch(updateStatus(item as status));
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
