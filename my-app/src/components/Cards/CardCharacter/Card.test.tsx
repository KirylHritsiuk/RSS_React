import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Character } from 'interfaces/character.interface';
import { CardCharacter } from './CardCharacter';

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

describe('Card test', () => {
  test('render card', () => {
    render(<CardCharacter data={data} />);
    expect(screen.getByTestId('cardCharacter')).toBeInTheDocument();
  });

  test('card img', () => {
    render(<CardCharacter data={data} />);
    expect(screen.getAllByAltText(data.name).length).toBe(2);
  });

  test('card title', () => {
    render(<CardCharacter data={data} />);
    expect(screen.getAllByText(/Rick/i).length).toBe(2);
  });

  test('card button', () => {
    render(<CardCharacter data={data} />);
    expect(screen.getByTestId('button')).not.toBeVisible;
  });

  test('hover card', () => {
    const { container } = render(<CardCharacter data={data} />);
    const button = screen.getByTestId('button');

    userEvent.hover(container);
    expect(button).toBeVisible();
  });

  test('visible modal', () => {
    const { container } = render(<CardCharacter data={data} />);
    const button = screen.getByTestId('button');
    const modal = screen.getByTestId('modal');
    userEvent.hover(container);
    userEvent.click(button);
    expect(modal).toBeVisible();
  });

  test('modal data', () => {
    const { container } = render(<CardCharacter data={data} />);
    const button = screen.getByTestId('button');
    userEvent.hover(container);
    userEvent.click(button);
    expect(screen.getByText(/alive/i)).toBeVisible();
    expect(screen.getByText(/male/i)).toBeVisible();
    expect(screen.getByText(/human/i)).toBeVisible();
  });
});
