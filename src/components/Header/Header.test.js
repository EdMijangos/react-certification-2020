import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header works properly', () => {
  it('renders the menu and login buttons', () => {
    render(<Header />);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('renders a search bar', () => {
    render(<Header />);
    expect(
      screen.getByRole('textbox', { placeholder: /Search.../i })
    ).toBeInTheDocument();
  });

  it('renders a toggle switch', () => {
    render(<Header />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});
