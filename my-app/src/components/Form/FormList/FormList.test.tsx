import { render, screen } from '@testing-library/react';
import { FormList } from './FormList';
import { IFormCard } from '../FormCard/FormCard.interface';

const data: IFormCard = {
  id: 0,
  name: 'name',
  surname: 'name',
  zipCode: '11111111',
  birthday: '2000-12-1',
  country: 'belarus',
  gender: 'male',
  avatar: null,
  agree: true,
};

describe('CardList component', () => {
  test('list render', () => {
    const { container } = render(<FormList cards={[data]} />);
    expect(container).toBeInTheDocument();
  });

  test('FormList length', () => {
    render(<FormList cards={[data]} />);
    expect(screen.getAllByTestId('formCard').length).toBe(1);
  });

  test('Empty list', () => {
    render(<FormList cards={[]} />);
    expect(screen.queryAllByTestId('formCard')).toBeNull;
  });
});
