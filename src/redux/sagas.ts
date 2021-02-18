import { call, put, takeEvery } from 'redux-saga/effects';
import { IActionFetchPosts, IPost } from '../interfaces';
import { fetchPosts, hideLoader, showLoader } from './actions';
import { FETCH_POST, REQUEST_POSTS } from './types';

export function* sagaWatcher() {
  // takeEvery обрабатывает каждый action в store
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  // put позволяет диспатчить события в store
  yield put(showLoader());
  // call вызывет функцию для чего-либо
  const payload: IPost[] = yield call(getPosts);
  const actionData: IActionFetchPosts = {
    type: FETCH_POST,
    payload,
  };

  yield put(actionData);
  yield put(hideLoader());
}

async function getPosts(): Promise<IPost> {
  const response: Response = await fetch('http://localhost:8000/posts');
  return await response.json();
}
