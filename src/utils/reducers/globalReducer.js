import themes from '../../assets/themes';

let favVids = JSON.parse(localStorage.getItem('favoriteVideos'));
favVids = favVids || [];

export const initialState = {
  searchTerms: '',
  session: null,
  activeTheme: 'light',
  theme: themes.light,
  favorites: favVids,
  favoritesHistory: favVids,
};

export function globalReducer(state, action) {
  switch (action.type) {
    case 'setSearch': {
      return {
        ...state,
        searchTerms: action.payload,
      };
    }
    case 'setSession': {
      return {
        ...state,
        session: action.payload,
      };
    }
    case 'logout': {
      return {
        ...state,
        session: null,
      };
    }
    case 'toggleTheme': {
      const newThemeKey = state.activeTheme === 'light' ? 'dark' : 'light';
      return {
        ...state,
        activeTheme: newThemeKey,
        theme: themes[newThemeKey],
      };
    }
    case 'addFavorite': {
      const favs = [...state.favorites, action.payload];
      localStorage.setItem('favoriteVideos', JSON.stringify(favs));
      return {
        ...state,
        favorites: favs,
        favoritesHistory: favs,
      };
    }
    case 'deleteFavorite': {
      const favs = state.favorites.filter((item, index) => index !== action.payload);
      localStorage.setItem('favoriteVideos', JSON.stringify(favs));
      return {
        ...state,
        favorites: favs,
      };
    }
    default:
      throw new Error('Undefined action');
  }
}
