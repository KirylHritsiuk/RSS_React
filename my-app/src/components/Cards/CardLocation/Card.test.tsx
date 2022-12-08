import { render, screen } from '@testing-library/react';
import { Location } from 'interfaces/location.interface';
import { CardLocation } from './CardLocation';

const data: Location = {
  id: 0,
  name: 'Earth',
  type: 'Planet',
  dimension: 'Dimension C-137',
  residents: [],
  url: '',
  created: '',
};

describe('Card test', () => {
  test('render card', () => {
    render(<CardLocation data={data} />);
    expect(screen.getByTestId('cardLocation')).toBeInTheDocument();
  });

  test('card title', () => {
    render(<CardLocation data={data} />);
    expect(screen.getAllByText(/Earth/i).length).toBe(1);
  });

  test('card info', () => {
    render(<CardLocation data={data} />);
    expect(screen.getByText(/Dimension C-137/i)).toBeInTheDocument();
    expect(screen.getByText(/Planet/i)).toBeInTheDocument();
  });

  test('card button', () => {
    render(<CardLocation data={data} />);
    expect(screen.queryByTestId('button')).not.toBeInTheDocument();
  });
});
