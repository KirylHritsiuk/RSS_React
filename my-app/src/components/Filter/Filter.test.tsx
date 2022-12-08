import { fireEvent, render, screen } from '@testing-library/react';
import { Filter } from './Filter';

describe('Filter component', () => {
  test('has 2 checkbox', () => {
    render(<Filter names={['game', 'pro']} updateFilter={() => {}} />);
    expect(screen.getAllByRole('radio')).toHaveLength(2);
  });

  test('set Value', () => {
    render(<Filter names={['game', 'pro']} updateFilter={() => {}} />);
    const radio = screen.getAllByRole('radio');
    fireEvent.click(radio[0]);
    expect(radio[0]).toBeChecked();
  });

  test('set defaultChecked', () => {
    render(<Filter names={['game', 'pro', 'name']} checked="name" updateFilter={() => {}} />);
    const radio = screen.getAllByRole('radio');
    expect(radio[2]).toBeChecked();
  });
});
