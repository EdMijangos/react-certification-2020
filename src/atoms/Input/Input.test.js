import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import InputAtom from './Input';

describe('Input Atom works properly', () => {
  it('has the correct width', () => {
    render(<InputAtom placeholder="test" />);
    expect(screen.getByPlaceholderText('test')).toHaveStyle('width: 25ch');
  });

  it('has an onKeyUp listener', () => {
    const someEvent = jest.fn();
    render(<InputAtom placeholder="test" keyUp={someEvent} />);
    let input = screen.getByPlaceholderText('test');
    fireEvent.keyUp(input, { key: "a"});
    expect(someEvent.mock.calls.length).toBe(1)
  });
});
