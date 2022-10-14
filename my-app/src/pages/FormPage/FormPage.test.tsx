import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FormPage from './FormPage';
import userEvent from '@testing-library/user-event';

describe('FormPage', () => {
  test('FormPage render', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <FormPage />
      </MemoryRouter>
    );
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.queryByTestId('FormCard')).not.toBeInTheDocument();
  });
});
