import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';

describe('Filter component', () => {
  test('Form render', () => {
    render(<Form />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  test('Form title view', () => {
    render(<Form title="test" />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('Form error un view', () => {
    render(<Form title="test" />);
    expect(screen.queryAllByTestId('errorMessage')).toBeNull;
  });

  test('Form error un view', () => {
    render(<Form title="test" />);
    const name = screen.getByTestId('name');
    const surname = screen.getByTestId('surname');
    const zipCode = screen.getByTestId('zipCode');
    const country = screen.getByTestId('country');
    const birthday = screen.getByTestId('birthday');
    const agree = screen.getByTestId('agree');
    const button = screen.getByRole('button');
    fireEvent.input(name, { target: { value: 'test' } });
    fireEvent.input(surname, { target: { value: 'test' } });
    fireEvent.input(zipCode, { target: { value: '1234567' } });
    fireEvent.change(country, { target: { value: 'Belarus' } });
    fireEvent.input(birthday, { target: { value: '2000-02-02' } });
    userEvent.click(agree);
    fireEvent.click(button);
    expect(screen.queryAllByTestId('errorMessage')).toBeNull;
  });

  test('Form error view and button disabled', () => {
    render(<Form title="test" />);
    const name = screen.getByTestId('name');
    const surname = screen.getByTestId('surname');
    const zipCode = screen.getByTestId('zipCode');
    const country = screen.getByTestId('country');
    const birthday = screen.getByTestId('birthday');
    const button = screen.getByRole('button');
    fireEvent.input(name, { target: { value: 't' } });
    fireEvent.input(surname, { target: { value: 'test' } });
    fireEvent.input(zipCode, { target: { value: '1234567' } });
    fireEvent.input(birthday, { target: { value: '2000-02-02' } });
    fireEvent.change(country, { target: { value: 'Belarus' } });
    fireEvent.click(button);
    expect(screen.getAllByTestId('errorMessage').length).toBe(2);
    expect(button).toBeDisabled;
  });

  test('Form toggle button ', () => {
    render(<Form title="test" />);
    const name = screen.getByTestId('name');
    const surname = screen.getByTestId('surname');
    const zipCode = screen.getByTestId('zipCode');
    const country = screen.getByTestId('country');
    const birthday = screen.getByTestId('birthday');
    const agree = screen.getByTestId('agree');
    const button = screen.getByRole('button');
    fireEvent.input(name, { target: { value: 't' } });
    fireEvent.input(surname, { target: { value: 'test' } });
    fireEvent.input(zipCode, { target: { value: '1234567' } });
    fireEvent.change(country, { target: { value: 'Belarus' } });
    fireEvent.input(birthday, { target: { value: '2000-02-02' } });
    userEvent.click(agree);
    fireEvent.click(button);
    expect(button).toBeDisabled;
    expect(screen.getAllByTestId('errorMessage').length).toBe(1);
    fireEvent.input(name, { target: { value: 'test' } });
    expect(screen.queryAllByTestId('errorMessage')).toBeNull;
    expect(button).not.toBeDisabled;
  });

  test('Form cleared inputs ', () => {
    render(<Form title="test" />);
    const name = screen.getByTestId('name');
    const surname = screen.getByTestId('surname');
    const zipCode = screen.getByTestId('zipCode');
    const country = screen.getByTestId('country');
    const birthday = screen.getByTestId('birthday');
    const agree = screen.getByTestId('agree');
    const button = screen.getByRole('button');
    fireEvent.input(name, { target: { value: 'test' } });
    fireEvent.input(surname, { target: { value: 'test' } });
    fireEvent.input(zipCode, { target: { value: '1234567' } });
    fireEvent.change(country, { target: { value: 'Belarus' } });
    fireEvent.input(birthday, { target: { value: '2000-02-02' } });
    userEvent.click(agree);
    fireEvent.click(button);
    expect(button).not.toBeDisabled;
    expect(name).toHaveValue('');
    expect(surname).toHaveValue('');
    expect(zipCode).toHaveValue(null);
    expect(country).toHaveValue('0');
    expect(birthday).toHaveValue('');
    expect(agree).not.toBeChecked;
  });
});
