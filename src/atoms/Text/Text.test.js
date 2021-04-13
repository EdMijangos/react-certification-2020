import React from 'react';
import { render, screen } from '@testing-library/react';
import TextAtom from './Text';

describe('Text Atom works properly', () => {
  it('renders the correct font when using label type', () => {
    render(<TextAtom type="label">Test text</TextAtom>);
    expect(screen.getByText('Test text')).toHaveStyle(
      'color: white; font-size: 0.875rem'
    );
  });

  it('renders the correct font when using subheader type', () => {
    render(<TextAtom type="subheader">Test text</TextAtom>);
    expect(screen.getByText('Test text')).toHaveStyle('color: black; font-size: 1rem');
  });

  it('renders the correct font when using header type', () => {
    render(<TextAtom type="header">Test text</TextAtom>);
    expect(screen.getByText('Test text')).toHaveStyle('color: black; font-size: 1.25rem');
  });

  it('renders the correct font when using title type', () => {
    render(<TextAtom type="title">Test text</TextAtom>);
    expect(screen.getByText('Test text')).toHaveStyle('color: black; font-size: 3.75rem');
  });

  it('renders the correct font when no type is used', () => {
    render(<TextAtom>Test text</TextAtom>);
    expect(screen.getByText('Test text')).toHaveStyle(
      'color: rgba(0, 0, 0, 0.54); font-size: 0.875rem'
    );
  });
});
