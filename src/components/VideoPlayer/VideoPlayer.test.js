import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoPlayer from './VideoPlayer';

const mockedData = {
  id: {
    videoId: 'dQw4w9WgXcQ',
  },
  snippet: {
    title: 'A video',
    thumbnails: {
      default: {
        url: 'someUrl',
      },
    },
    description: 'Some description',
  },
};

describe('Video Player works properly', () => {
  it('renders a video', () => {
    render(<VideoPlayer data={mockedData} />);
    expect(document.querySelector('iframe')).toBeInTheDocument();
  });

  it('renders a title', () => {
    render(<VideoPlayer data={mockedData} />);
    expect(screen.getByText('A video')).toBeInTheDocument();
  });

  it('renders a description', () => {
    render(<VideoPlayer data={mockedData} />);
    expect(screen.getByText('Some description')).toBeInTheDocument();
  });
});
