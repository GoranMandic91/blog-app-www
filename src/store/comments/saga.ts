import {
  takeEvery, call, put
} from 'redux-saga/effects';
import commentsAPI from '../../services/comments';
import postsAPI from '../../services/posts';
import { fetchPostsRequest } from '../posts/actions';
import {
  fetchCommentsSuccess,
  fetchCommentsFailure,
  fetchCommentsRequest,
  createCommentSuccess,
  updateCommentSuccess,
  updateCommentFailure,
  createCommentFailure,
} from './actions';
import { CreateCommentRequestAction, CREATE_COMMENT_REQUEST, FetchCommentsRequestAction, FETCH_COMMENTS_REQUEST, UpdateCommentRequestAction, UPDATE_COMMENT_REQUEST } from './types';

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

export function* createComment(action: CreateCommentRequestAction) {
  try {
    yield call(commentsAPI.create, action.postId, action.name, action.text);
    yield put(createCommentSuccess());
    yield put(fetchCommentsRequest(`${action.postId}`));
    yield put(fetchPostsRequest());
  } catch (e) {
    yield put(createCommentFailure());
  }
}

export function* watchCreateCommentRequest() {
  yield takeEvery(CREATE_COMMENT_REQUEST, createComment);
}

export function* updateComment(action: UpdateCommentRequestAction) {
  try {
    const response = yield call(commentsAPI.update, action.id, action.name, action.text);
    yield put(fetchCommentsRequest(response.data.data.postId));
    yield put(updateCommentSuccess());
  } catch (e) {
    yield put(updateCommentFailure());
  }
}

export function* watchUpdateCommentRequest() {
  yield takeEvery(UPDATE_COMMENT_REQUEST, updateComment);
}
