import React from 'react';
import { Avatar, MenuButton, SearchBar, ToggleSwitch } from '../../molecules';
import { StyledHeader } from './styled';

function Header() {
  return (
    <StyledHeader>
      <MenuButton />
      <SearchBar />
      <ToggleSwitch className="mediaHide">Dark Mode</ToggleSwitch>
      <Avatar className="mediaHide" />
    </StyledHeader>
  );
}

export default Header;
