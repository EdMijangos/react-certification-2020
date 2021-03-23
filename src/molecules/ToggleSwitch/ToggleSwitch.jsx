import React from 'react';
import styled from 'styled-components';
import TextAtom from '../../atoms/Text';

const CheckBoxWrapper = styled.div`
  position: relative;
  text-align: start;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 5px;
  left: 0;
  width: 45px;
  height: 15px;
  cursor: pointer;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.3);
  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    margin-top: -2px;
    border-radius: 50%;
    background: white;
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  float: left;
  &:checked + ${CheckBoxLabel} {
    background-color: rgba(25, 133, 123, 0.3);
    &::after {
      background: #198576;
      margin-left: 24px;
    }
  }
`;

function ToggleSwitch(props) {
  return (
    <CheckBoxWrapper className={props.className}>
      <CheckBox id="toggle" type="checkbox" />
      <CheckBoxLabel htmlFor="toggle" />
      <TextAtom type="label" padding="0 0 0 2rem">
        {props.children}
      </TextAtom>
    </CheckBoxWrapper>
  );
}

export default ToggleSwitch;
