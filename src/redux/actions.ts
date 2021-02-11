import { IPost, IActionPostsType, IActionFetchPostsType } from '../interfaces';
import { CREATE_POST, FETCH_POST } from './types';

export function createPost(post: IPost): IActionPostsType {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchPosts(): Function {
  return async (dispatch: Function): Promise<void> => {
    const response: Response = await fetch('http://localhost:3000/posts');
    const json: IPost[] = await response.json();
    const actionData: IActionFetchPostsType = {
      type: FETCH_POST,
      payload: json,
    };

    dispatch(actionData);
  };
}
