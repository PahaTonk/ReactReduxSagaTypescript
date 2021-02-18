import {
  CREATE_POST,
  FETCH_POST,
  HIDE_LOADER,
  REQUEST_POSTS,
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

export interface IApp {
  loading: boolean;
}

export interface IActionFetchPosts {
  type: typeof FETCH_POST;
  payload: IPost[];
}

export interface IActionPosts {
  type: typeof CREATE_POST;
  payload: IPost;
}

export interface IActioRequestPost {
  type: typeof REQUEST_POSTS;
}

export interface IActionApp {
  type: typeof SHOW_LOADER | typeof HIDE_LOADER;
}
