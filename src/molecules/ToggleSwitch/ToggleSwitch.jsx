import React, { useContext } from 'react';
import { TextAtom } from '../../atoms';
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from './styled';
import { GlobalContext } from '../../states/GlobalContext';
import PropTypes from 'prop-types';

function ToggleSwitch({ className, children }) {
  const [, dispatch] = useContext(GlobalContext);

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

ToggleSwitch.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
}

ToggleSwitch.defaultProps = {
  className: null,
  children: null,
}

export default ToggleSwitch;
