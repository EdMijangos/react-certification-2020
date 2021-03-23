import React from 'react';
import styled from 'styled-components';
import InputAtom from '../../atoms/Input';

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
            <StyledIcon src='../../assets/img/search-icon-white-one-clipart.png' />
            <InputAtom icon placeholder="Search..." />
        </div>
    )
}

export default SearchBar;