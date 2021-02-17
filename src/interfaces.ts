import {
  CREATE_POST,
  FETCH_POST,
  HIDE_LOADER,
  SHOW_LOADER,
} from './redux/types';

export interface ITodo {
  title: string;
  id: number;
  completed: boolean;
}

export interface IPost {
  title: string;
  id: number;
}

export interface ILocalPosts {
  posts: IPost[];
}

export interface IActionFetchPosts {
  type: typeof FETCH_POST;
  payload: IPost[];
}
export interface IActionPosts {
  type: typeof CREATE_POST;
  payload: IPost;
}

export interface IApp {
  loading: boolean;
}

export interface IActionApp {
  type: typeof SHOW_LOADER | typeof HIDE_LOADER;
}

export interface IRootReducer {
  postsState: ILocalPosts;
  fetchedPostsState: ILocalPosts;
  appState: IApp;
}
