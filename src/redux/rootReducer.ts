import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { fetchedPostsReducer } from './fetchedPostsReducer';
import { postsReducer } from './postsReducer';

const rootReducer = combineReducers({
  postsState: postsReducer,
  fetchedPostsState: fetchedPostsReducer,
  appState: appReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
