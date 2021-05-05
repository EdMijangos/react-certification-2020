import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToggleSwitch from './ToggleSwitch';
import { ContextWrapper } from '../../states/GlobalContext';

describe('Toggle Switch works properly', () => {
  it('lets you toggle the switch', () => {
    render(<ContextWrapper><ToggleSwitch /></ContextWrapper>);
    const toggle = screen.getByRole('checkbox', { id: /toggle/i });
    expect(toggle).not.toBeChecked();
    userEvent.click(toggle);
    expect(toggle).toBeChecked();
  });

  it('lets you put a text label on the switch', () => {
    render(<ContextWrapper><ToggleSwitch>Test label</ToggleSwitch></ContextWrapper>);
    const ToggleContainer = screen
      .getByRole('checkbox', { id: /toggle/i })
      .closest('div');
    expect(ToggleContainer).toHaveTextContent('Test label');
  });

  it('lets you toggle between light and dark mode', () => {
    render(<ContextWrapper><ToggleSwitch>Test label</ToggleSwitch></ContextWrapper>);
    const toggle = screen.getByRole('checkbox', { id: /toggle/i });
    const label = screen.getByText('Test label');
    expect(toggle).not.toBeChecked();
    expect(label).toHaveStyle('color: black')
    userEvent.click(toggle);
    expect(toggle).toBeChecked();
    expect(label).toHaveStyle('color: white')
  });
});
