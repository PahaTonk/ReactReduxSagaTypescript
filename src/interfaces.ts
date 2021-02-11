import { CREATE_POST, FETCH_POST } from './redux/types';

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

export interface IActionFetchPostsType {
  type: typeof FETCH_POST;
  payload: IPost[];
}
export interface IActionPostsType {
  type: typeof CREATE_POST;
  payload: IPost;
}

export interface IRootReducer {
  postsState: ILocalPosts;
  fetchedPostsState: ILocalPosts;
}
