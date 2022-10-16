import { FormCard } from 'components';
import React from 'react';
import { FormListProps } from './FormList.props';
import styles from './FormList.module.css';
export class FormList extends React.Component<FormListProps> {
  render(): React.ReactNode {
    return (
      <>
        {this.props.data ? (
          <div className={styles.cardList}>
            {this.props.data.map((data) => (
              <FormCard key={data.id} data={data} />
            ))}
          </div>
        ) : (
          <div className={styles.cardList}></div>
        )}
      </>
    );
  }
}
