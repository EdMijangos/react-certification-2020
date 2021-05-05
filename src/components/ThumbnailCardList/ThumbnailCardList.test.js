import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ThumbnailCardList from './ThumbnailCardList';

const mockedData = [
  {
    id: {
      videoId: '1',
    },
    snippet: {
      title: 'Card 1',
      thumbnails: {
        default: {
          url: 'someUrl',
        },
      },
      description: 'The first card',
    },
  },
  {
    id: {
      videoId: '2',
    },
    snippet: {
      title: 'Card 2',
      thumbnails: {
        default: {
          url: 'someUrl',
        },
      },
      description: 'The second card',
    },
  },
  {
    id: {
      videoId: '3',
    },
    snippet: {
      title: 'Card 3',
      thumbnails: {
        default: {
          url: 'someUrl',
        },
      },
      description: 'The third card',
    },
  },
];

describe('Thumbnail Card List works properly', () => {
  it('renders the correct number of thumbnail cards', () => {
    render(
      <BrowserRouter>
        <ThumbnailCardList data={mockedData} />
      </BrowserRouter>
    );
    expect(screen.getAllByTestId(/thumbnail-card-/i)).toHaveLength(3);
  });
});
