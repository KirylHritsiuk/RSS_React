import { render, screen } from '@testing-library/react';
import { CardList } from './CardList';
import { CATALOG } from '../../dataBase/catalog';

describe('CardList component', () => {
  test('list render', () => {
    const { container } = render(<CardList catalog={CATALOG} />);
    expect(container).toBeInTheDocument();
  });

  test('List length', () => {
    render(<CardList catalog={CATALOG} />);
    expect(screen.getAllByTestId('card').length).toBe(CATALOG.length);
  });
});
