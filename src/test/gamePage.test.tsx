import { describe, it } from 'vitest';
import { waitFor } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../app/App';
import { renderWithProviders } from 'helpers/index';

describe('Game page', () => {
  it('render page', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/game/23']}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => screen.getByText('Apex Legends'));
  });
});
