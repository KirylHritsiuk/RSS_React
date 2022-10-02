import { fireEvent, render, screen } from '@testing-library/react';
import { Filter } from './Filter';

describe('Filter render', () => {
  test('render header', () => {
    render(<Filter names={['game', 'pro']} />);
    expect(screen.getByTestId('filter')).toBeInTheDocument();
  });
  test('has 2 checkbox', () => {
    render(<Filter names={['game', 'pro']} />);
    expect(screen.getAllByRole('checkbox')).toHaveLength(2);
  });
  test('set Value', () => {
    render(<Filter names={['game', 'pro']} />);
    const checkbox: HTMLInputElement = screen.getByTestId('game');
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
});
