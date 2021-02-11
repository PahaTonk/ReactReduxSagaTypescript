import { IActionFetchPostsType, ILocalPosts } from '../interfaces';
import { FETCH_POST } from './types';

const initialState = {
  posts: [],
};

export const fetchedPostsReducer = (
  state: ILocalPosts = initialState,
  action: IActionFetchPostsType,
): ILocalPosts => {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};
