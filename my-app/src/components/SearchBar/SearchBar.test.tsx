import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  test('button', () => {
    render(<SearchBar />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('input change', () => {
    render(<SearchBar />);
    const input: HTMLInputElement = screen.getByTestId('input');
    fireEvent.change(input, {
      target: { value: 'test' },
    });
    expect(input.value).toBe('test');
  });

  test('input unmount', () => {
    const { unmount } = render(<SearchBar />);
    const input: HTMLInputElement = screen.getByTestId('input');
    fireEvent.change(input, {
      target: { value: 'test' },
    });
    unmount();
    render(<SearchBar />);
    expect(input.value).toBe('test');
  });
});
