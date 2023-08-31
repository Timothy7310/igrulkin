import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../app/App';

describe('NotFound page', () => {
  it('render page', () => {
    render(
      <MemoryRouter initialEntries={['/qwer']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Такой страницы нет')).toBeInTheDocument();
  });
});
