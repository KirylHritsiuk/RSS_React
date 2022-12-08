import styles from './Pagination.module.css';
import ReactPaginate from 'react-paginate';
import { PaginationProps } from './Pagination.props';
import { useUrl } from 'Hook/useUrl';
interface PagOnClick {
  index: number | null;
  selected: number;
  nextSelectedPage: number | undefined;
  event: object;
  isPrevious: boolean;
  isNext: boolean;
  isBreak: boolean;
  isActive: boolean;
}

interface selectedItem {
  selected: number;
}
export const Pagination = ({ state, changePage }: PaginationProps): JSX.Element => {
  const { createURL } = useUrl();

  const handlePageChange = ({ selected }: selectedItem) => {
    changePage(createURL(undefined, selected + 1));
  };

  const change = ({ isPrevious, isNext }: PagOnClick) => {
    if (isNext && state.data.next) {
      changePage(state.data.next);
    } else if (isPrevious && state.data.prev) {
      changePage(state.data.prev);
    }
  };

  return (
    <>
      <ReactPaginate
        previousLabel="Prev"
        nextLabel="Next"
        pageClassName={styles.page}
        previousClassName={styles.page}
        nextClassName={styles.page}
        breakLabel="..."
        breakClassName={styles.page}
        pageCount={state.data.pages ? state.data.pages : 0}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        onClick={change}
        containerClassName={styles.pagination}
        activeClassName={styles.current}
        disabledClassName={styles.disabled}
        forcePage={state.filter.page ? state.filter.page - 1 : undefined}
        prevPageRel={state.data.prev}
        nextPageRel={state.data.next}
      />
    </>
  );
};
