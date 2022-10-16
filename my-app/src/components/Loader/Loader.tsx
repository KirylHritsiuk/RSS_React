import React from 'react';
import { LoaderProps } from './Loader.props';
import { Htag } from 'components';
import styles from './Loader.module.css';
import cn from 'classnames';

export class Loader extends React.Component<LoaderProps> {
  render(): React.ReactNode {
    return (
      <div className={cn(styles.loader, this.props.className)} data-testid="loader">
        <Htag tag="h2">Loading.....</Htag>
      </div>
    );
  }
}
