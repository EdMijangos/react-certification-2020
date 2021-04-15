import React, { createContext, useReducer } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { initialTheme, themeReducer } from '../utils/reducers/themeReducer';

const Background = styled.div`
  background-color: ${({ theme }) => theme.background};
`;

export const ThemeContext = createContext({
  state: '',
  dispatch: () => {},
});

export function ThemeWrapper({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialTheme);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.theme}>
        <Background>{children}</Background>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
