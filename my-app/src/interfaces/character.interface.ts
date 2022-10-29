export interface Character {
  id: number;
  name: string;
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterFilter {
  name?: string;
  type?: string;
  species?: string;
  status?: 'Dead' | 'Alive' | 'unknown';
  gender?: 'Female' | 'Male' | 'Genderless' | 'unknown';
  page?: number;
}
