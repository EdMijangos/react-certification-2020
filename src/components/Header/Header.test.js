import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header';
import { ContextWrapper } from '../../states/GlobalContext';

describe('Header works properly', () => {
  it('renders the menu and login buttons', () => {
    render(<ContextWrapper><Router><Header /></Router></ContextWrapper>);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('renders a search bar', () => {
    render(<ContextWrapper><Router><Header /></Router></ContextWrapper>);
    expect(
      screen.getByRole('textbox', { placeholder: /Search.../i })
    ).toBeInTheDocument();
  });

  it('renders a toggle switch', () => {
    render(<ContextWrapper><Router><Header /></Router></ContextWrapper>);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});
