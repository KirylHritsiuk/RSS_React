import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input component', () => {
  test('render input', () => {
    render(<Input type={'text'} placeholder="name" />);
    expect(screen.getByPlaceholderText('name')).toBeInTheDocument();
  });

  test('error box disabled', () => {
    render(<Input type={'text'} placeholder="name" errorMessage="failed" />);
    expect(screen.queryByText('failed')).not.toBeInTheDocument();
  });

  test('error box enable', () => {
    render(
      <Input type={'text'} placeholder="name" errorMessage="failed" error={false} isDirty={true} />
    );
    expect(screen.queryByText('failed')).toBeInTheDocument();
  });
});
