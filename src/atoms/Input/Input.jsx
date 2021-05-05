import React from 'react';
import { StyledInput } from './styled';
import PropTypes from 'prop-types';

function InputAtom({ icon, id, placeholder, type, keyUp }) {
  return <StyledInput id={id} icon={icon} placeholder={placeholder} onKeyUp={keyUp} type={type} />;
}

InputAtom.propTypes = {
  icon: PropTypes.bool,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  keyUp: PropTypes.func
}

InputAtom.defaultProps = {
  icon: false,
  id: null,
  placeholder: null,
  keyUp: null
}

export default InputAtom;
