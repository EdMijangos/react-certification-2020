import themes from '../../assets/themes';

export const initialTheme = {
  activeTheme: 'light',
  theme: themes.light,
};

export function themeReducer(state, action) {
  switch (action.type) {
    case 'toggleTheme': {
      const newThemeKey = state.activeTheme === 'light' ? 'dark' : 'light';
      return { activeTheme: newThemeKey, theme: themes[newThemeKey] };
    }
    default:
      throw new Error();
  }
}
