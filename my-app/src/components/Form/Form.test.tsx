import { render, screen } from '@testing-library/react';
import { Form } from './Form';

describe('Filter component', () => {
  test('Form render', () => {
    render(<Form />);
    screen.debug();
    expect(screen.getByText(/main form/i)).toBeInTheDocument();
  });
});
