import { render, screen } from '@testing-library/react';
import { Episode } from 'interfaces/episode.interface';
import { CardEpisode } from './CardEpisode';

const data: Episode = {
  id: 1,
  name: 'Pilot',
  air_date: 'December 2, 2013',
  episode: 'S01E01',
  characters: [],
  url: '',
  created: '',
};

describe('Card test', () => {
  test('render card', () => {
    render(<CardEpisode data={data} />);
    expect(screen.getByTestId('cardEpisode')).toBeInTheDocument();
  });

  test('card title', () => {
    render(<CardEpisode data={data} />);
    expect(screen.getAllByText(/Pilot/i).length).toBe(1);
  });

  test('card info', () => {
    render(<CardEpisode data={data} />);
    expect(screen.getByText(/December 2, 2013/i)).toBeInTheDocument();
    expect(screen.getByText(/S01E01/i)).toBeInTheDocument();
  });

  test('card button', () => {
    render(<CardEpisode data={data} />);
    expect(screen.queryByTestId('button')).not.toBeInTheDocument();
  });
});
