import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { InputAtom } from '../../atoms';
import { StyledIcon } from './styled';
import Icon from '../../assets/img/search-icon-white-one-clipart.png';
import { GlobalContext } from '../../states/GlobalContext';

function SearchBar() {
  const [, dispatch] = useContext(GlobalContext);
  const history = useHistory();
  let term = '';

  function handleClick() {
    history.push('/');
    dispatch({type:'setSearch', payload: term});
  }

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      history.push('/');
      dispatch({type:'setSearch', payload: event.target.value});
    }
    term = event.target.value;
  };

  return (
    <div>
      <StyledIcon src={Icon} tabIndex="0" onClick={handleClick} />
      <InputAtom icon placeholder="Search..." keyUp={handleKeyUp} />
    </div>
  );
}

export default SearchBar;
