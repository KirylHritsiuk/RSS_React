import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App component route', () => {
  test('router', () => {
    render(
      <MemoryRouter initialEntries={['/', '/about']}>
        <App />
      </MemoryRouter>
    );

    const aboutLink = screen.getByTestId('about-link');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();

    const homeLink = screen.getByTestId('home-link');
    userEvent.click(homeLink);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  test('error page', () => {
    render(
      <MemoryRouter initialEntries={['/test']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('404-page')).toBeInTheDocument();
  });

  test('input save value', () => {
    render(
      <MemoryRouter initialEntries={['/', '/about']}>
        <App />
      </MemoryRouter>
    );
    const key = 'search';
    const data = 'input';
    const homeLink = screen.getByTestId('home-link');
    const aboutLink = screen.getByTestId('about-link');

    userEvent.click(homeLink);
    const input: HTMLInputElement = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: data } });

    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    expect(localStorage.getItem(key)).toEqual(data);

    userEvent.click(homeLink);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    expect(input.value).toBe(data);
  });
});
