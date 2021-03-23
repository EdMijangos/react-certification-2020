import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard';

describe('Video Card works properly', () => {
  it('contains an image', () => {
    render(
      <VideoCard
        id="test-card"
        thumbnail="someURL"
        subheader="Test"
        description="This is a description"
      />
    );
    expect(screen.getByTestId('test-card').firstChild).toHaveStyle(
      'background-color: url(someURL)'
    );
  });

  it('contains the title text', () => {
    render(
      <VideoCard
        id="test-card"
        thumbnail="someURL"
        subheader="Test"
        description="This is a description"
      />
    );
    expect(screen.getByTestId('test-card')).toHaveTextContent('Test');
  });

  it('contains the description text', () => {
    render(
      <VideoCard
        id="test-card"
        thumbnail="someURL"
        subheader="Test"
        description="This is a description"
      />
    );
    expect(screen.getByTestId('test-card')).toHaveTextContent('This is a description');
  });
});
