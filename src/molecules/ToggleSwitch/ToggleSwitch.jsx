import React from 'react';
import { TextAtom } from '../../atoms';
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from './styled';

function ToggleSwitch({ className, children }) {
  return (
    <CheckBoxWrapper className={className}>
      <CheckBox id="toggle" type="checkbox" />
      <CheckBoxLabel htmlFor="toggle" />
      <TextAtom type="label" padding="0 0 0 2rem">
        {children}
      </TextAtom>
    </CheckBoxWrapper>
  );
}

export default ToggleSwitch;
