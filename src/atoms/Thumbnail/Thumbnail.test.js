import React from 'react';
import { render, screen } from '@testing-library/react';
import ThumbnailAtom from './Thumbnail';

describe('Thumbnail Atom works properly', () => {
  it('renders the correct image', () => {
    render(<ThumbnailAtom thumbnail="someURL" height="100px" />);
    expect(screen.getByTestId('thumbnail')).toHaveStyle('background-image: url(someURL)');
  });

  it('renders the correct image', () => {
    render(<ThumbnailAtom thumbnail="someURL" height="100px" />);
    expect(screen.getByTestId('thumbnail')).toHaveStyle('height: 100px');
  });
});
