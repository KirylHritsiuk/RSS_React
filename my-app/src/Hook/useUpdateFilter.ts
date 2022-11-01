import { gender, status } from 'context/home/HomeContext';
import { useFetching } from './useFetching';

export const useUpdateFilter = () => {
  const { state, changePage, dispatch, category } = useFetching();

  const updateFilter = (e: React.ChangeEvent<HTMLInputElement>, label: 'status' | 'gender') => {
    dispatch({
      type: label,
      payload: { filter: { [label]: e.target.value as gender | status } },
    });

    const url = `${state.url}${category}?page=${state.filter.page}&name=${state.filter.name}`;

    switch (label) {
      case 'gender':
        const hasAllInStatus = state.filter.status === 'All' ? '' : state.filter.status;
        if (e.target.value !== 'All') {
          changePage(url + '&status=' + hasAllInStatus + '&gender=' + e.target.value);
        } else {
          changePage(url + '&status=' + hasAllInStatus);
        }
        break;

      case 'status':
        const hasAllInGender = state.filter.gender === 'All' ? '' : state.filter.gender;
        if (e.target.value !== 'All') {
          changePage(url + '&gender=' + hasAllInGender + '&status=' + e.target.value);
        } else {
          changePage(url + '&gender=' + hasAllInGender);
        }
        break;
      default:
        changePage(url);
    }
  };
  return { state, updateFilter, category };
};
