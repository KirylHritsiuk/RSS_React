import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FieldError } from 'react-hook-form';
import { Select } from './Select';

const options = ['one', 'class', 'two'];
const error: FieldError = {
  type: 'onChange',
  message: 'failed',
};

describe('Select component', () => {
  test('render select', () => {
    render(<Select options={options} defaultValue={0} />);
    expect(screen.getByText('one')).toBeInTheDocument();
  });

  test('error box disabled', () => {
    render(<Select options={options} />);
    expect(screen.queryByText('failed')).not.toBeInTheDocument();
  });

  test('error box enable', () => {
    render(<Select options={options} error={error} />);
    expect(screen.queryByText('failed')).toBeInTheDocument();
  });

  test('open list', () => {
    render(<Select options={options} defaultValue={0} />);
    userEvent.click(screen.getByText('one'));
    expect(screen.queryByText('one')).toBeInTheDocument();
    expect(screen.queryByText('class')).toBeInTheDocument();
    expect(screen.queryByText('two')).toBeInTheDocument();
  });
});
