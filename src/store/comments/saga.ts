import {
  takeEvery, call, put
} from 'redux-saga/effects';
import postsAPI from '../../services/posts';
import {
  fetchCommentsSuccess,
  fetchCommentsFailure,
} from './actions';
import { FetchCommentsRequestAction, FETCH_COMMENTS_REQUEST } from './types';

export function* fetchComments(action: FetchCommentsRequestAction) {
  try {
    const response = yield call(postsAPI.getAllComments, action.id);
    yield put(fetchCommentsSuccess(response.data.data));
  } catch (e) {
    yield put(fetchCommentsFailure());
  }
}

export function* watchFetchCommentsRequest() {
  yield takeEvery(FETCH_COMMENTS_REQUEST, fetchComments);
}
