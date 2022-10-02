import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App component route', () => {
  test('router', () => {
    render(
      <MemoryRouter initialEntries={['/', '/about', '/404']}>
        <App />
      </MemoryRouter>
    );
    const NotfoundLink = screen.getByTestId('404-link');
    userEvent.click(NotfoundLink);
    expect(screen.getByTestId('404-page')).toBeInTheDocument();

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

  test('save search value', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'test' } });
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/test/i)).toBe(input);
  });
});
