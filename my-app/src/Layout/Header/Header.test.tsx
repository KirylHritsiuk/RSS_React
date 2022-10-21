import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Header component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header title="task" />
      </MemoryRouter>
    );
  });
  test('render header', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('render title', () => {
    expect(screen.getByText(/task/i)).toBeInTheDocument();
  });
});
