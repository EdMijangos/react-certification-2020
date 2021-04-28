import React from 'react';
import PropTypes from 'prop-types';
import { StyledMenu, OptionBg } from './styled';

function MenuAtom({ hide, siblingHeight, alignRight, children }) {
  let items;
  if (!Array.isArray(children)) {
    items = <OptionBg>{children}</OptionBg>;
  } else {
    items = children
      .filter((item) => item !== null)
      .map((item, index) => <OptionBg key={`key_${index}`}>{item}</OptionBg>);
  }

  return (
    <StyledMenu hide={hide} siblingHeight={siblingHeight} alignRight={alignRight}>
      {items}
    </StyledMenu>
  );
}

MenuAtom.propTypes = {
  hide: PropTypes.bool,
  siblingHeight: PropTypes.string.isRequired,
  alignRight: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

MenuAtom.defaultProps = {
  hide: false,
  alignRight: false,
};

export default MenuAtom;
