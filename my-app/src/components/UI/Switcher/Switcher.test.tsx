import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switcher } from './Switcher';

describe('Switcher component', () => {
  test('render switcher', () => {
    render(<Switcher />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeVisible;
  });
  test('check hidden input', () => {
    render(<Switcher />);
    expect(screen.getByRole('checkbox')).not.toBeVisible;
  });

  test('label click', () => {
    render(<Switcher />);
    userEvent.click(screen.getByLabelText(''));
    expect(screen.getAllByRole('checkbox')).toBeChecked;
  });
});
