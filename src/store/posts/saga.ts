import {
  takeEvery, call, put
} from 'redux-saga/effects';
import postsAPI from '../../services/posts';
import {
  fetchPostsSuccess,
  fetchPostsFailure,
} from './actions';
import { FETCH_POSTS_REQUEST } from './types';

export function* fetchPosts() {
  try {
    const response = yield call(postsAPI.getAll);
    yield put(fetchPostsSuccess(response.data.data));
  } catch (e) {
    yield put(fetchPostsFailure());
  }
}

export function* watchFetchPostsRequest() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
}
