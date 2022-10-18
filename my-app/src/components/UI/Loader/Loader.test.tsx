import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader component', () => {
  test('render Loader', () => {
    render(<Loader />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('Loader title', () => {
    render(<Loader />);
    expect(screen.getByText(/Loading...../i)).toBeInTheDocument();
  });
});
