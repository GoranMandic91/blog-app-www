import { all, call } from 'redux-saga/effects';
import { watchFetchPostsRequest } from './posts/saga';
import { watchFetchCommentsRequest } from './comments/saga';

export default function* rootSaga() {
  yield all([
    call(watchFetchPostsRequest),
    call(watchFetchCommentsRequest)
  ]);
}
