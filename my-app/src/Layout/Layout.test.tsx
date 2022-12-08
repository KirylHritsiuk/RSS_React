import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Layout />
      </MemoryRouter>
    );
  });

  test('render header', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('render footer', () => {
    expect(screen.getByText('2022')).toBeInTheDocument();
  });

  test('render main', () => {
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
