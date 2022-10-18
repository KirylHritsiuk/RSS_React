export {};
// import { render, screen, fireEvent } from '@testing-library/react';
// import { setLocalStorage } from 'tests/localStorageMock';
// import { SearchBar } from './SearchBar';

// describe('SearchBar component', () => {
//   afterEach(() => jest.clearAllMocks());
//   beforeEach(() => {
//     window.localStorage.clear();
//   });

//   test('button primary', () => {
//     render(<SearchBar />);
//     const button = screen.getByRole('button');
//     expect(button).toHaveClass('primary');
//   });

//   test('input unmount', () => {
//     const { unmount } = render(<SearchBar />);
//     const input: HTMLInputElement = screen.getByPlaceholderText('Search...');
//     unmount();
//     expect(input).toBeNull;
//   });

//   test('input change', () => {
//     render(<SearchBar />);
//     const input: HTMLInputElement = screen.getByTestId('input');
//     fireEvent.change(input, {
//       target: { value: 'test' },
//     });
//     expect(input.value).toBe('test');
//   });

//   test('get input value from localStorage', () => {
//     const key = 'search';
//     const data = 'input';
//     setLocalStorage(key, data);
//     expect(localStorage.getItem(key)).toEqual(data);
//     const { unmount } = render(<SearchBar />);
//     const input: HTMLInputElement = screen.getByPlaceholderText('Search...');
//     expect(input.value).toBe(data);
//     fireEvent.change(input, { target: { value: 'new' } });
//     unmount();
//     expect(localStorage.getItem(key)).toEqual('new');
//   });
// });
