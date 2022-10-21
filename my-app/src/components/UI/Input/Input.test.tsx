import { render, screen } from '@testing-library/react';
import { FieldError } from 'react-hook-form';
import { Input } from './Input';

const error: FieldError = {
  type: 'onChange',
  message: 'failed',
};

describe('Input component', () => {
  test('render input', () => {
    render(<Input type={'text'} placeholder="name" />);
    expect(screen.getByPlaceholderText('name')).toBeInTheDocument();
  });

  test('error box disabled', () => {
    render(<Input type={'text'} placeholder="name" />);
    expect(screen.queryByText('failed')).toBeNull();
  });

  test('error box enable', () => {
    render(<Input type={'text'} placeholder="name" error={error} />);
    expect(screen.queryByText('failed')).toBeInTheDocument();
  });
});
