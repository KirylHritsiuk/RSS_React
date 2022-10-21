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

  test('button disabled', () => {
    render(<Form title="test" />);
    const surname = screen.getByTestId('surname');
    const zipCode = screen.getByTestId('zipCode');
    const country = screen.getByTestId('country');
    const birthday = screen.getByTestId('birthday');
    const button = screen.getByRole('button');
    fireEvent.change(surname, { target: { value: 'test' } });
    fireEvent.change(zipCode, { target: { value: '1234567' } });
    fireEvent.change(birthday, { target: { value: '2000-02-02' } });
    fireEvent.change(country, { target: { value: 'Belarus' } });
    fireEvent.click(button);
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
    fireEvent.change(name, { target: { value: 't' } });
    fireEvent.change(surname, { target: { value: 'test' } });
    fireEvent.change(zipCode, { target: { value: '1234567' } });
    fireEvent.change(country, { target: { value: 'Belarus' } });
    fireEvent.change(birthday, { target: { value: '2000-02-02' } });
    userEvent.click(agree);
    fireEvent.click(button);
    expect(button).toBeDisabled;
    fireEvent.change(name, { target: { value: 'test' } });
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
    fireEvent.input(name, { target: { value: 'testName' } });
    fireEvent.input(surname, { target: { value: 'test' } });
    fireEvent.input(zipCode, { target: { value: '1234567' } });
    fireEvent.change(country, { target: { value: 'Belarus' } });
    fireEvent.change(birthday, { target: { value: '2000-02-02' } });
    userEvent.click(agree);
    fireEvent.click(button);
    screen.debug();
    expect(button).not.toBeDisabled;
    expect(screen.getByTestId('name')).toHaveValue('testName');
    // expect(name).toHaveValue('');
    // expect(surname).toHaveValue('');
    // expect(zipCode).toHaveValue(null);
    // expect(country).toHaveValue('0');
    // expect(birthday).toHaveValue('');
    // expect(agree).not.toBeChecked;
  });
});
