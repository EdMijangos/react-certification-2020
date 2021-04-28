import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoPlayer from './VideoPlayer';
import { ContextWrapper } from '../../states/GlobalContext';

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
    render(<ContextWrapper><VideoPlayer data={mockedData} /></ContextWrapper>);
    expect(document.querySelector('iframe')).toBeInTheDocument();
  });

  it('renders a title', () => {
    render(<ContextWrapper><VideoPlayer data={mockedData} /></ContextWrapper>);
    expect(screen.getByText('A video')).toBeInTheDocument();
  });

  it('renders a description', () => {
    render(<ContextWrapper><VideoPlayer data={mockedData} /></ContextWrapper>);
    expect(screen.getByText('Some description')).toBeInTheDocument();
  });
});
