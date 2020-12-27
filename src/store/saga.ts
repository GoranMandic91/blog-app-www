import { all, call } from 'redux-saga/effects';
import { watchFetchPostsRequest } from './posts/saga';

export default function* rootSaga() {
  yield all([
    call(watchFetchPostsRequest)
  ]);
}
