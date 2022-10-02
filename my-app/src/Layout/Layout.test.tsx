import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout render', () => {
  test('render header', () => {
    render(<Layout />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
  test('render footer', () => {
    render(<Layout />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
  test('render main', () => {
    render(<Layout />);
    expect(screen.getByTestId('main')).toBeInTheDocument();
  });
  test('render outlet', () => {
    render(<Layout />);
    expect(screen.getByTestId('outlet')).toBeInTheDocument();
  });
});
