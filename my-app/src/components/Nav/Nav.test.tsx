import { render, screen } from '@testing-library/react';
import { Nav } from './Nav';

describe('Nav render', () => {
  test('length', () => {
    const { container } = render(<Nav />);
    expect(container.children).toBe(3);
  });

//   test('render H2', () => {
//     render(<Nav >Text</Nav>);
//     expect(screen.getByText(/Text/i)).toBeInTheDocument();
//   });

//   test('render H3', () => {
//     render(<Nav >Text</Nav>);
//     expect(screen.getByText(/Text/i)).toBeInTheDocument();
//   });
});
