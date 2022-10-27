import React, { useContext } from 'react';
import styles from './Filter.module.css';
import { FilterProps } from './Filter.props';
import cn from 'classnames';
import { HomeContext } from 'context/home/HomeContext';

export const Filter = ({ className, names, checked }: FilterProps) => {
  console.log('filter', checked);
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
              // onChange={(e) =>
              //   checked.setCategory && checked.setCategory(e.target.value as Category)
              // }
            />
            {name}
          </label>
        ))}
    </div>
  );
};
