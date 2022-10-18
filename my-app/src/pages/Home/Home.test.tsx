import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home Page', () => {
  test('render Home page', async () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <Home />
      </MemoryRouter>
    );
    const home = await screen.findByTestId('home-page');
    expect(home).toBeInTheDocument();
  });

  test('render content', async () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <Home />
      </MemoryRouter>
    );
    const filter = await screen.findByTestId('filter');
    const cardList = await screen.findByTestId('cardList');
    const pagination = await screen.findByTestId('pagination');
    expect(filter).toBeInTheDocument();
    expect(cardList).toBeInTheDocument();
    expect(pagination).toBeInTheDocument();
  });

  test('loader', async () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <Home />
      </MemoryRouter>
    );
    const input = await screen.findByPlaceholderText('Search...');
    fireEvent.input(input, { target: { value: '1' } });
    userEvent.keyboard('Enter');
    expect(await screen.findByTestId('loader')).toBeVisible();
  });
});
