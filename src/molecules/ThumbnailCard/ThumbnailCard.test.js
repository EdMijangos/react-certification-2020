import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ThumbnailCard from './ThumbnailCard';

describe('Thumbnail Card works properly', () => {
  it('contains an image', () => {
    render(
      <BrowserRouter>
        <ThumbnailCard id="test-card" thumbnail="someURL" subheader="Test" />
      </BrowserRouter>
    );
    expect(screen.getByTestId('thumbnail')).toHaveStyle('background-color: url(someURL)');
  });

  it('contains the title text', () => {
    render(
      <BrowserRouter>
        <ThumbnailCard id="test-card" thumbnail="someURL" subheader="Test" />
      </BrowserRouter>
    );
    expect(screen.getByTestId('test-card')).toHaveTextContent('Test');
  });

  it('redirects to the correct url', () => {
    render(
      <BrowserRouter>
        <ThumbnailCard
          id="test-card"
          videoId="redirect"
          thumbnail="someURL"
          subheader="Test"
        />
      </BrowserRouter>
    );
    expect(screen.getByTestId('test-card').closest('a')).toHaveAttribute(
      'href',
      '/view/redirect'
    );
  });
});
