import React from 'react';
import { render, screen } from '@testing-library/react';
import ThumbnailAtom from './Thumbnail';

describe('Thumbnail Atom works properly', () => {
  it('renders the correct image', () => {
    render(<ThumbnailAtom thumbnail="someURL" />);
    expect(screen.getByTestId('thumbnail')).toHaveStyle('background-image: url(someURL)');
  });
});
