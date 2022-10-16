import React from 'react';
import { PaginationProps } from './Pagination.props';
import styles from './Pagination.module.css';
import cn from 'classnames';

export class Pagination extends React.Component<PaginationProps> {
  getPageCount = () => {
    return Math.ceil(this.props.totalPages / 10);
  };

  getPagesArray = () => {
    const result = [];
    for (let i = 0; i < this.getPageCount(); i++) {
      result.push(i + 1);
    }
    return result;
  };

  render() {
    const pagesArray = this.getPagesArray();
    return (
      <div className={styles.pagination}>
        {pagesArray.map((p) => (
          <span
            onClick={() => this.props.changePage(p)}
            key={p}
            className={cn(styles.page, {
              [styles.current]: this.props.page === p,
            })}
          >
            {p}
          </span>
        ))}
      </div>
    );
  }
}
