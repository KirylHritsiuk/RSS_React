import { render, screen } from '@testing-library/react';
import { CardList } from './CardList';
import { CATALOG } from '../../dataBase/catalog';

test('List length', () => {
  const { container } = render(<CardList catalog={CATALOG} />);
  expect(container.children.length).toBe(CATALOG.length);
});
