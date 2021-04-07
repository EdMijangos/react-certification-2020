import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideoCard from './VideoCard';

describe('Video Card works properly', () => {
  it('contains an image', () => {
    render(
      <BrowserRouter>
        <VideoCard
          id="test-card"
          thumbnail="someURL"
          header="Test"
          description="This is a description"
        />
      </BrowserRouter>
    );
    expect(screen.getByTestId('thumbnail')).toHaveStyle('background-color: url(someURL)');
  });

  it('contains the title text', () => {
    render(
      <BrowserRouter>
        <VideoCard
          id="test-card"
          thumbnail="someURL"
          header="Test"
          description="This is a description"
        />
      </BrowserRouter>
    );
    expect(screen.getByTestId('test-card')).toHaveTextContent('Test');
  });

  it('contains the description text', () => {
    render(
      <BrowserRouter>
        <VideoCard
          id="test-card"
          thumbnail="someURL"
          header="Test"
          description="This is a description"
        />
      </BrowserRouter>
    );
    expect(screen.getByTestId('test-card')).toHaveTextContent('This is a description');
  });

  it('contains the description text', () => {
    render(
      <BrowserRouter>
        <VideoCard
          id="test-card"
          link="redirect"
          thumbnail="someURL"
          header="Test"
          description="This is a description"
        />
      </BrowserRouter>
    );
    expect(screen.getByTestId('test-card').closest('a')).toHaveAttribute(
      'href',
      '/view/redirect'
    );
  });
});
