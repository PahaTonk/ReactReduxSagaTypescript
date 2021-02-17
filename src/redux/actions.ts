import {
  IPost,
  IActionPosts,
  IActionFetchPosts,
  IActionApp,
} from '../interfaces';
import { CREATE_POST, FETCH_POST, HIDE_LOADER, SHOW_LOADER } from './types';

export function createPost(post: IPost): IActionPosts {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchPosts(): Function {
  return async (dispatch: Function): Promise<void> => {
    dispatch(showLoader());
    const response: Response = await fetch('http://localhost:3000/posts');
    const json: IPost[] = await response.json();
    const actionData: IActionFetchPosts = {
      type: FETCH_POST,
      payload: json,
    };

    dispatch(actionData);
    dispatch(hideLoader());
  };
}

export function showLoader(): IActionApp {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader(): IActionApp {
  return {
    type: HIDE_LOADER,
  };
}
