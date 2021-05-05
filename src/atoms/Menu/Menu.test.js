import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuAtom from './Menu';

describe('Menu Atom works properly', () => {
  it('should hide or be visible depending on prop', () => {
    render(
      <MenuAtom hide={false} siblingHeight="10px">
        <p>Test</p>
      </MenuAtom>
    );
    expect(screen.getByText('Test')).toBeVisible();
    render(
      <MenuAtom hide siblingHeight="10px">
        <p>Test2</p>
      </MenuAtom>
    );
    expect(screen.getByText('Test2')).not.toBeVisible();
  });

  it('should position itself under its sibling', () => {
    render(
      <MenuAtom siblingHeight="10px">
        <p>Test</p>
      </MenuAtom>
    );
    expect(screen.getByText('Test').closest('div').parentElement).toHaveStyle(
      'top: 10px'
    );
  });

  it('adds a wrapper to its children', () => {
    render(
      <MenuAtom siblingHeight="10px">
        <p>Test</p>
      </MenuAtom>
    );
    expect(screen.getByText('Test').closest('div')).toHaveStyle('cursor: pointer');
  });
});
