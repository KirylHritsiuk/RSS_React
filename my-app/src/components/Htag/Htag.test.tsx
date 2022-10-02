import { render, screen } from '@testing-library/react';
import { Htag } from './Htag';

describe('Htag render', () => {
  test('render H1', () => {
    render(<Htag tag="h1">Text</Htag>);
    expect(screen.getByText(/Text/i)).toBeInTheDocument();
  });

  test('render H2', () => {
    render(<Htag tag="h2">Text</Htag>);
    expect(screen.getByText(/Text/i)).toBeInTheDocument();
  });

  test('render H3', () => {
    render(<Htag tag="h3">Text</Htag>);
    expect(screen.getByText(/Text/i)).toBeInTheDocument();
  });
});
