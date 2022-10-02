import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('render', () => {
  render(<Footer />);
  expect(screen.getByText(/2022/i)).toBeInTheDocument();
});
