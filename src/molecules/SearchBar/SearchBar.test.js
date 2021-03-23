import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('Search Bar works properly', () => {
  it('contains the search icon', () => {
    render(<SearchBar />);
    const searchBarContainer = screen
      .getByRole('textbox', { placeholder: /Search.../i })
      .closest('div');
    const searchIcon = screen.getByRole('img');
    expect(searchBarContainer).toContainElement(searchIcon);
  });

  it('lets you write in the search bar', () => {
    render(<SearchBar />);
    const searchBar = screen.getByRole('textbox', { placeholder: /Search.../i });
    userEvent.type(searchBar, 'charizard');
    expect(searchBar).toHaveValue('charizard');
  });
});
