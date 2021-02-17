import { IActionPosts, ILocalPosts } from '../interfaces';
import { CREATE_POST } from './types';

const initialState = {
  posts: [],
};

export const postsReducer = (
  state: ILocalPosts = initialState,
  action: IActionPosts,
): ILocalPosts => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    default:
      return state;
  }
};
