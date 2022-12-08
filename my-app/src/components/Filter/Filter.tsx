import React from 'react';
import styles from './Filter.module.css';
import { FilterProps } from './Filter.props';
import cn from 'classnames';

export class Filter extends React.Component<FilterProps> {
  render() {
    const { className, names, checked, updateFilter, ...props } = this.props;
    return (
      <div className={cn(styles.filter, className)} {...props} data-testid="filter">
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
  }
}
