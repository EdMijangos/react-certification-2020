import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ButtonAtom, MenuAtom, TextAtom } from '../../atoms';
import { Bar, RelativePos } from './styled';
import { GlobalContext } from '../../states/GlobalContext'

function MenuButton() {
  let [hide, setHide] = useState(true);
  const [state] = useContext(GlobalContext);

  function clickHandler() {
    setHide(!hide)
  }

  return (
      <RelativePos onClick={clickHandler}>
        <ButtonAtom round>
          <Bar />
          <Bar />
          <Bar bottom />
        </ButtonAtom>
        <MenuAtom hide={hide} siblingHeight="66px">
          <Link to="">
            <TextAtom type="label">Home</TextAtom>
          </Link>
          {state.session ? ( 
            <Link to="/favorites">
              <TextAtom type="label">Favoritos</TextAtom>
            </Link>
            ) : null
          }
        </MenuAtom>
      </RelativePos>
  );
}

export default MenuButton;
