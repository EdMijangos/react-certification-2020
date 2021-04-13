import React from 'react';
import { StyledInput } from './styled';

function InputAtom({ icon, placeholder, keyUp }) {
  return <StyledInput icon={icon} placeholder={placeholder} onKeyUp={keyUp} />;
}

export default InputAtom;
