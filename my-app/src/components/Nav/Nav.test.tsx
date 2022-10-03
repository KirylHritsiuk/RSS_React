import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Nav } from './Nav';

describe('Nav component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Nav />
      </MemoryRouter>
    );
  });
  test('length', () => {
    expect(screen.getAllByRole('link').length).toBe(2);
  });
});
