import { render, screen } from '@testing-library/react';
import { ICatalog } from 'dataBase/catalog.interface';

const data: ICatalog = {
  id: 'el1',
  brand: 'apple',
  name: 'Pro',
  image: './img/content/apple/apple.jpeg',
  price: '14530.00',
  year: '2019',
  size: '32',
  resolution: '6016x3384',
  aspectRatio: '16:9',
  refRate: '60',
  count: '1',
  portrait: 'false',
  gaming: 'false',
  pro: 'true',
  favorite: 'false',
};

describe('Card test', () => {});
