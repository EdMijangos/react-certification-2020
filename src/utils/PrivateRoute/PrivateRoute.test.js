import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { ContextWrapper, GlobalContext } from '../../states/GlobalContext';

const TestComponent = () => <div>Test component</div>;

describe('Private Route works properly', () => {
  it('redirects you when not logged in', () => {
    render(
      <div>
        <ContextWrapper>
          <MemoryRouter initialEntries={['/view/someId']}>
            <PrivateRoute exact path="/somePath">
              <TestComponent />
            </PrivateRoute>
          </MemoryRouter>
        </ContextWrapper>
        <a href="/somePath" />
      </div>
    );
    fireEvent.click(screen.getByRole('link'));
    expect(screen.queryByText('Test component')).not.toBeInTheDocument();
  });

  // THIS DOESN'T WORK. I RAN OUT OF TIME BEFORE I COULD FIGURE IT OUT
  it('renders the component when logged in', () => {
    render(
      <div>
        <GlobalContext.Provider
          value={[{ session: true }, jest.fn(() => 'do something')]}
        >
          <MemoryRouter>
            <PrivateRoute exact path="/somePath">
              <TestComponent />
            </PrivateRoute>
          </MemoryRouter>
        </GlobalContext.Provider>
        <a href="/somePath" />
      </div>
    );
    fireEvent.click(screen.getByRole('link'));
    expect(document.body.textContent).toBe('Test component');
  });
});
