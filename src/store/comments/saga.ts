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
} from './actions';
import { CreateCommentRequestAction, CREATE_COMMENT_REQUEST, FetchCommentsRequestAction, FETCH_COMMENTS_REQUEST } from './types';

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
    yield put(fetchCommentsRequest(action.postId.toString()));
    yield put(fetchPostsRequest());
    yield put(createCommentSuccess());
  } catch (e) {
    yield put(fetchCommentsFailure());
  }
}

export function* watchCreateCommentRequest() {
  yield takeEvery(CREATE_COMMENT_REQUEST, createComment);
}
