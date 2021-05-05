import React, { createContext, useReducer } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { initialState, globalReducer } from '../utils/reducers/globalReducer';

const Background = styled.div`
  background-color: ${({ theme }) => theme.background};
`;

export const GlobalContext = createContext(initialState);

export function ContextWrapper({ children }) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      <ThemeProvider theme={state.theme}>
        <Background>{children}</Background>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}
