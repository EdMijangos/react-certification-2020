import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToggleSwitch from './ToggleSwitch';

describe('Toggle Switch works properly', () => {
  it('lets you toggle the switch', () => {
    render(<ToggleSwitch />);
    const toggle = screen.getByRole('checkbox', { id: /toggle/i });
    expect(toggle).not.toBeChecked();
    userEvent.click(toggle);
    expect(toggle).toBeChecked();
  });

  it('lets you put a text label on the switch', () => {
    render(<ToggleSwitch>Test label</ToggleSwitch>);
    const ToggleContainer = screen
      .getByRole('checkbox', { id: /toggle/i })
      .closest('div');
    expect(ToggleContainer).toHaveTextContent('Test label');
  });
});
