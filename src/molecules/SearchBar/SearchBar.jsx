import React from 'react';
import styled from 'styled-components';
import InputAtom from '../../atoms/Input';

const url = require('../../assets/img/search-icon-white-one-clipart.png')

const StyledIcon = styled.img`
  position: relative;
  top: 0.3rem;
  left: 2rem;
  width: 24px;
  height: 24px;
`;

function SearchBar() {
  return (
    <div>
      <StyledIcon src={url} />
      <InputAtom icon placeholder="Search..." />
    </div>
  );
}

export default SearchBar;
