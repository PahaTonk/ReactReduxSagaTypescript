import { IActionApp, IApp } from '../interfaces';
import { HIDE_LOADER, SHOW_LOADER } from './types';

const initialState = {
  loading: false,
};

export const appReducer = (state: IApp = initialState, action: IActionApp): IApp => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };

    case HIDE_LOADER:
      return { ...state, loading: false };

    default:
      return state;
  }
};
