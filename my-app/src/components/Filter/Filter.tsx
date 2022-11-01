import styles from './Filter.module.css';
import { FilterProps } from './Filter.props';
import cn from 'classnames';
import { Htag } from 'components/UI/Htag/Htag';

export const Filter = ({ className, names, checked, type, label, updateFilter }: FilterProps) => {
  return (
    <div className={cn(styles.filter, className)}>
      {label && (
        <Htag tag="h3" className={styles.title}>
          {label}
        </Htag>
      )}
      {names &&
        names.map((name) => (
          <label className={styles.item} htmlFor={name + label} key={name}>
            <input
              type={type}
              defaultChecked={checked === name}
              name={`${label} filter`}
              value={name}
              id={name + label}
              onChange={updateFilter}
            />
            {name}
          </label>
        ))}
    </div>
  );
};
