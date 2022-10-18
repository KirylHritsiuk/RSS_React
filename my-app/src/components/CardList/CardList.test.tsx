import { render, screen } from '@testing-library/react';
import { Character } from 'interfaces/character.interface';
import { CardList } from './CardList';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const url = 'https://rickandmortyapi.com/api/character/1';
const data: Character = {
  id: 1,
  name: 'Rick',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  image: '',
  episode: [],
  url: '',
  created: '',
};

describe('CardList component', () => {
  test('list render', () => {
    const { container } = render(<CardList url={url} />);
    expect(container).toBeInTheDocument();
  });

  test('Card response', async () => {
    render(<CardList url={url} />);
    expect(await screen.findByTestId('cardCharacter')).toBeInTheDocument();
  });
});

describe('mock API', () => {
  const server = setupServer(
    rest.get('/character/1', (req, res, ctx) => {
      return res(ctx.json(data));
    })
  );
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('Card response', async () => {
    render(<CardList url={'/character/1'} />);
    expect(await screen.findByTestId('cardCharacter')).toBeInTheDocument();
  });

  test('Card 500', async () => {
    server.use(
      rest.get('/character/1', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<CardList url={'/character/1'} />);
    expect(await screen.findByTestId('error')).toBeInTheDocument();
  });

  test('Card 404', async () => {
    server.use(
      rest.get('/character/1', (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );
    render(<CardList url={'/character/1'} />);
    expect(await screen.findByTestId('error')).toBeInTheDocument();
  });

  test('Card not correct data', async () => {
    render(<CardList url={'/character/1m'} />);
    expect(await screen.findByTestId('error')).toBeInTheDocument();
  });
});
