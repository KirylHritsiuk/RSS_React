export {};
// import { render, screen } from '@testing-library/react';
// import { CardList } from './FormList';
// import { CATALOG } from '../../dataBase/catalog';
// import { FormCardTestData } from 'components/Form/FormCard/FormCard.test';

// describe('CardList component', () => {
//   test('list render', () => {
//     const { container } = render(<CardList catalog={CATALOG} />);
//     expect(container).toBeInTheDocument();
//   });

//   test('CardList length', () => {
//     render(<CardList catalog={CATALOG} />);
//     expect(screen.getAllByTestId('card').length).toBe(CATALOG.length);
//   });

//   test('FormCardList length', () => {
//     render(<CardList catalog={FormCardTestData} />);
//     expect(screen.getAllByTestId('FormCard').length).toBe(2);
//   });

//   test('Empty list', () => {
//     render(<CardList />);
//     expect(screen.queryAllByTestId('card')).toBeNull;
//   });
// });
