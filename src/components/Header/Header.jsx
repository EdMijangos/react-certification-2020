import React from 'react';
import styled from 'styled-components';
import { Avatar, MenuButton, SearchBar, ToggleSwitch } from '../../molecules';

const StyledHeader = styled.div`
    width: 100%;
    display: grid;
    align-items: center;
    padding-left: 1rem;
    padding-right: 0.5rem;
    grid-template-columns: 1fr 70% 2fr 1fr;
    grid-gap: 1rem;
    background-color: #1C5476;
    z-index: 100;

    @media (max-width: 1160px) {
        grid-template-columns: 1fr 80%;
        & > .mediaHide {
            display: none;
        }
    }
`

function Header() {
    return (
        <StyledHeader>
            <MenuButton />
            <SearchBar />
            <ToggleSwitch className="mediaHide">Dark Mode</ToggleSwitch>
            <Avatar className="mediaHide" />
        </StyledHeader>
    )
}

export default Header;