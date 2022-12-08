import { render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination component', () => {
  test('render Pagination', () => {
    render(<Pagination page={1} prev={null} next={null} changePage={() => {}} />);
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });

  test('page visible', () => {
    render(<Pagination page={1} prev={null} next={null} changePage={() => {}} />);
    expect(screen.getByText('1')).toBeVisible();
  });
});
