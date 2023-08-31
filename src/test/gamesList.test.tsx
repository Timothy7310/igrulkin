import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
import { GamesList } from 'components/gamesList';
import { games } from 'mock';
import { GamesList as GameListProps } from 'app/types';

describe('Games List component', () => {
  it('render', () => {
    render(
      <MemoryRouter>
        <GamesList games={games as GameListProps} />
      </MemoryRouter>
    );

    expect(screen.getAllByTestId('game-item').length).toBe(10);
  });
});
