import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { fetchedPostsReducer } from './fetchedPostsReducer';
import { postsReducer } from './postsReducer';

export const rootReducer = combineReducers({
  postsState: postsReducer,
  fetchedPostsState: fetchedPostsReducer,
  appState: appReducer,
});
