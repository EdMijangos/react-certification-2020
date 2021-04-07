import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideoCardList from './VideoCardList';

const mockedData = [
  {
    id: {
      channelId: 1,
    },
    snippet: {
      title: 'Card 1',
      thumbnails: {
        medium: {
          url: 'someUrl',
        },
      },
      description: 'The first card',
    },
  },
  {
    id: {
      channelId: 2,
    },
    snippet: {
      title: 'Card 2',
      thumbnails: {
        medium: {
          url: 'someUrl',
        },
      },
      description: 'The second card',
    },
  },
  {
    id: {
      channelId: 3,
    },
    snippet: {
      title: 'Card 3',
      thumbnails: {
        medium: {
          url: 'someUrl',
        },
      },
      description: 'The third card',
    },
  },
];

describe('Video Card List works properly', () => {
  it('renders the correct number of video cards', () => {
    render(
      <BrowserRouter>
        <VideoCardList data={mockedData} />
      </BrowserRouter>
    );
    expect(screen.getAllByTestId(/video-card-/i)).toHaveLength(3);
  });
});
