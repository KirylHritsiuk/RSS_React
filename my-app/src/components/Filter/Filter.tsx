import React from 'react';
import styles from './Filter.module.css';
import { FilterProps } from './Filter.props';
import cn from 'classnames';

export const Filter = ({ className, names, checked, updateFilter }: FilterProps) => {
  return (
    <div className={cn(styles.filter, className)} data-testid="filter">
      {names &&
        names.map((name) => (
          <label className={styles.item} htmlFor={name} key={name}>
            <input
              type="radio"
              defaultChecked={name === checked ? true : false}
              name="filter"
              value={name}
              id={name}
              data-testid={name}
              onChange={(e) => updateFilter(e.target.value)}
            />
            {name}
          </label>
        ))}
    </div>
  );
};
