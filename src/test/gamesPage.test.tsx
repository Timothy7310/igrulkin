import { describe, it, expect } from 'vitest';
import { waitFor } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../app/App';
import { renderWithProviders } from 'helpers/index';

describe('Games page', () => {
  it('render page', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => screen.getAllByRole('combobox'));
    expect(screen.findByTestId('game-item')).toBeTruthy();
  });
});
