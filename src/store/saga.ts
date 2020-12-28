import { all, call } from 'redux-saga/effects';
import { watchFetchPostsRequest } from './posts/saga';
import {
  watchCreateCommentRequest,
  watchFetchCommentsRequest,
  watchUpdateCommentRequest
} from './comments/saga';
import { watchFetchSinglePostRequest } from './post/saga';

export default function* rootSaga() {
  yield all([
    call(watchFetchPostsRequest),
    call(watchFetchCommentsRequest),
    call(watchFetchSinglePostRequest),
    call(watchCreateCommentRequest),
    call(watchUpdateCommentRequest)
  ]);
}
