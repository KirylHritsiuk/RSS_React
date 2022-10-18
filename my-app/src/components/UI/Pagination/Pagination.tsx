import React from 'react';
import { PaginationProps } from './Pagination.props';
import styles from './Pagination.module.css';
import cn from 'classnames';

export class Pagination extends React.Component<PaginationProps> {
  render() {
    const { page, prev, next, changePage } = this.props;
    return (
      <div className={styles.pagination}>
        {prev !== null ? (
          <span className={styles.page} onClick={() => changePage(prev, page - 1)}>
            prev
          </span>
        ) : (
          <span className={cn(styles.page, styles.disabled)}>prev</span>
        )}
        <span className={styles.page}>{page}</span>
        {next !== null ? (
          <span className={styles.page} onClick={() => changePage(next, page + 1)}>
            next
          </span>
        ) : (
          <span className={cn(styles.page, styles.disabled)}>next</span>
        )}
      </div>
    );
  }
}
