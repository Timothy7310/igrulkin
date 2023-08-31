import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
import { GamesFilters } from 'components/gamesFilters';

describe('Games Filters components', () => {
  it('render', () => {
    render(
      <MemoryRouter>
        <GamesFilters />
      </MemoryRouter>
    );

    expect(screen.getAllByRole('combobox').length).toBe(3);
  });
});
