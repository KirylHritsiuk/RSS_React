import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header render', () => {
  test('render header', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
  test('render links', () => {
    render(<Header />);
    expect(screen.getAllByRole('link')).toBeInTheDocument();
  });
  test('render title', () => {
    render(<Header />);
    expect(screen.getByTestId('title')).toBeInTheDocument();
  });
});
