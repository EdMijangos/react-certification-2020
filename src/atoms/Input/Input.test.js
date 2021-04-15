import React from 'react';
import { render, screen } from '@testing-library/react';
import InputAtom from './Input';

describe('Input Atom works properly', () => {
  it('has the correct width', () => {
    render(<InputAtom placeholder="test" />);
    expect(screen.getByPlaceholderText('test')).toHaveStyle('width: 25ch');
  });
});
