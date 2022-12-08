import React from 'react';
import { ModalProps } from './Modal.props';
import { Button } from 'components';
import styles from './Modal.module.css';
import cn from 'classnames';

export class Modal extends React.Component<ModalProps> {
  render(): React.ReactNode {
    const { className, visible, setModal } = this.props;
    return (
      <div
        className={cn(styles.modal, {
          [styles.active]: visible,
        })}
        onClick={() => setModal(false)}
        data-testid="modal"
      >
        <div className={cn(styles.content, className)} onClick={(e) => e.stopPropagation()}>
          <Button appearance="ghost" onClick={() => setModal(false)}>
            X
          </Button>
          {this.props.children}
        </div>
      </div>
    );
  }
}
