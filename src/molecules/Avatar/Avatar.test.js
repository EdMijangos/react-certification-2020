import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Avatar from './Avatar';
import { ContextWrapper, GlobalContext } from '../../states/GlobalContext';

describe('Avatar works properly', () => {
  it('contains an image', () => {
    render(
      <ContextWrapper>
        <BrowserRouter>
          <Avatar />
        </BrowserRouter>
      </ContextWrapper>
    );
    expect(screen.getByAltText('avatar')).toHaveAttribute('src', 'profile_icon.png');
  });

  it('hides and shows a menu when clicked', () => {
    render(
      <ContextWrapper>
        <BrowserRouter>
          <Avatar />
        </BrowserRouter>
      </ContextWrapper>
    );
    expect(screen.getByText('Iniciar sesión')).not.toBeVisible();
    fireEvent.click(screen.getByAltText('avatar'));
    expect(screen.getByText('Iniciar sesión')).toBeVisible();
  });

  it('redirects to the login page', () => {
    render(
      <ContextWrapper>
        <BrowserRouter>
          <Avatar />
        </BrowserRouter>
      </ContextWrapper>
    );
    fireEvent.click(screen.getByAltText('avatar'));
    expect(screen.getByText('Iniciar sesión').closest('a')).toHaveAttribute(
      'href',
      '/login'
    );
  });

  it('updates when logged in', () => {
    render(
      <GlobalContext.Provider
        value={[{ session: { avatarUrl: '/test.png' } }, jest.fn(() => 'do something')]}
      >
        <BrowserRouter>
          <Avatar />
        </BrowserRouter>
      </GlobalContext.Provider>
    );
    fireEvent.click(screen.getByAltText('avatar'));
    expect(screen.queryByText('Iniciar sesión')).not.toBeInTheDocument();
    expect(screen.getByText('Cerrar sesión')).toBeVisible();
    expect(screen.getByAltText('avatar')).toHaveAttribute('src', '/test.png');
  });
});
