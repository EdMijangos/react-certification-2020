import React, { useContext } from 'react';
import { TextAtom } from '../../atoms';
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from './styled';
import { ThemeContext } from '../../states/ThemeContext';

function ToggleSwitch({ className, children }) {
  const { dispatch } = useContext(ThemeContext);

  return (
    <CheckBoxWrapper className={className}>
      <CheckBox
        id="toggle"
        type="checkbox"
        onClick={() => dispatch({ type: 'toggleTheme' })}
      />
      <CheckBoxLabel htmlFor="toggle" />
      <TextAtom type="label" padding="0 0 0 2rem">
        {children}
      </TextAtom>
    </CheckBoxWrapper>
  );
}

export default ToggleSwitch;
