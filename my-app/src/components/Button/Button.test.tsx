import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button render', () => {
  test('render button', () => {
    render(<Button appearance="primary">Click</Button>);
    const buttonElement = screen.getByText(/Click/i);
    const btn = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  test('render button primary', () => {
    render(<Button appearance="primary">Click</Button>);
    const buttonElement = screen.getByText(/Click/i);
    expect(buttonElement).toHaveClass('primary');
  });

  test('render button ghost', () => {
    render(<Button appearance="ghost">Click</Button>);
    const buttonElement = screen.getByText(/Click/i);
    expect(buttonElement).toHaveClass('ghost');
    expect(buttonElement).not.toHaveClass('primary');
  });
});
