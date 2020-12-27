import {
  takeEvery, call, put
} from 'redux-saga/effects';
import postsAPI from '../../services/posts';
import {
  fetchSinglePostSuccess,
  fetchSinglePostFailure,
} from './actions';
import { FETCH_SINGLE_POST_REQUEST, FetchSinglePostRequestAction } from './types';

export function* fetchSinglePost(action: FetchSinglePostRequestAction) {
  try {
    const response = yield call(postsAPI.getPost, action.id);
    yield put(fetchSinglePostSuccess(response.data.data));
  } catch (e) {
    yield put(fetchSinglePostFailure());
  }
}

export function* watchFetchSinglePostRequest() {
  yield takeEvery(FETCH_SINGLE_POST_REQUEST, fetchSinglePost);
}
