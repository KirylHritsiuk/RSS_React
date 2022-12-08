import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal test', () => {
  test('render modal', () => {
    render(<Modal visible={true} setModal={() => {}} />);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  test('modal visible', () => {
    render(<Modal visible={true} setModal={() => {}} />);
    expect(screen.getByTestId('modal')).toBeVisible();
  });

  test('modal hidden', () => {
    render(
      <Modal visible={false} setModal={() => {}}>
        Content
      </Modal>
    );
    expect(screen.queryByText(/content'/i)).toBeNull();
  });

  test('modal button', () => {
    render(<Modal visible={true} setModal={() => {}} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
