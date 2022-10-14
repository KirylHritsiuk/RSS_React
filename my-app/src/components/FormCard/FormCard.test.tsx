import { render, screen } from '@testing-library/react';
import { FormCard } from './FormCard';
import { IFormCard } from './FormCard.interface';

export const FormCardTestData: IFormCard[] = [
  {
    id: 1,
    name: 'Kiryl',
    surname: 'Hritsiuk',
    zipCode: '5555686',
    birthday: '2000-10-10',
    country: 'Belarus',
    gender: 'male',
    avatar: null,
  },
];

describe('Card test', () => {
  test('render card', () => {
    render(<FormCard data={FormCardTestData[0]} />);
    expect(screen.getByTestId('FormCard')).toBeInTheDocument();
  });
  test('card img', () => {
    render(<FormCard data={FormCardTestData[0]} />);
    expect(screen.getByAltText(FormCardTestData[0].name)).toBeInTheDocument();
  });
  test('card name', () => {
    render(<FormCard data={FormCardTestData[0]} />);
    expect(screen.getByText(/Kiryl/)).toBeInTheDocument();
  });
  test('card surname', () => {
    render(<FormCard data={FormCardTestData[0]} />);
    expect(screen.getByText(/Hritsiuk/)).toBeInTheDocument();
  });
  test('card zipCode', () => {
    render(<FormCard data={FormCardTestData[0]} />);
    expect(screen.getByText(/5555686/)).toBeInTheDocument();
  });
  test('card birthday', () => {
    render(<FormCard data={FormCardTestData[0]} />);
    expect(screen.getByText(/2000-10-10/)).toBeInTheDocument();
  });
  test('card country', () => {
    render(<FormCard data={FormCardTestData[0]} />);
    expect(screen.getByText(/Belarus/)).toBeInTheDocument();
  });
  test('card gender', () => {
    render(<FormCard data={FormCardTestData[0]} />);
    expect(screen.getByText(/male/)).toBeInTheDocument();
  });
});
