import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MenuButton from './MenuButton';
import { ContextWrapper, GlobalContext } from '../../states/GlobalContext';

describe('Menu Button works properly', () => {
  it('hides and shows a menu when clicked', () => {
    render(
      <ContextWrapper>
        <BrowserRouter>
          <MenuButton />
        </BrowserRouter>
      </ContextWrapper>
    );
    expect(screen.getByText('Home')).not.toBeVisible();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Home')).toBeVisible();
  });

  it('redirects to the home page', () => {
    render(
      <ContextWrapper>
        <BrowserRouter>
          <MenuButton />
        </BrowserRouter>
      </ContextWrapper>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
  });

  it('updates when logged in', () => {
    render(
      <GlobalContext.Provider value={[{ session: true }, jest.fn(() => 'do something')]}>
        <BrowserRouter>
          <MenuButton />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Home')).toBeVisible();
    expect(screen.getByText('Favoritos')).toBeVisible();
  });
});
