import sagaTestingHelper from 'redux-saga-testing';
import { call, put, takeEvery } from 'redux-saga/effects';
import postsAPI from '../../services/posts';
import {
  fetchSinglePostFailure,
  fetchSinglePostSuccess
} from './actions';
import {
  fetchSinglePost,
  watchFetchSinglePostRequest,
} from './saga';
import {

  FetchSinglePostRequestAction,
  FETCH_SINGLE_POST_REQUEST,
} from './types';

describe('comments saga', () => {

  describe('fetchSinglePost', () => {
    const action: FetchSinglePostRequestAction = {
      type: "FETCH_SINGLE_POST_REQUEST",
      id: '1',
    };

    const response = {
      status: 201,
      data: {
        data: {
          id: 1,
          title: 'title',
          content: 'content',
        }
      }
    };

    describe('is succesfull', () => {
      const it = sagaTestingHelper(fetchSinglePost(action));

      it('calls postsAPI getAllComments', (result) => {
        expect(result).toEqual(call(postsAPI.getPost, action.id));
        return response;
      });

      it('puts fetchSinglePostSuccess', (result) => {
        expect(result).toEqual(put(fetchSinglePostSuccess(response.data.data)));
      });
    });

    describe('is not succesfull', () => {
      const it = sagaTestingHelper(fetchSinglePost(action));
      const e = new Error('error');
      it('throws at any point', () => e);

      it('puts fetchSinglePostFailure', (result) => {
        expect(result).toEqual(put(fetchSinglePostFailure()));
      });
    });

  });

  describe('watchFetchSinglePostRequest', () => {
    const it = sagaTestingHelper(watchFetchSinglePostRequest());

    it('takes every FETCH_SINGLE_POST_REQUEST', (result) => {
      expect(result).toEqual(
        takeEvery(FETCH_SINGLE_POST_REQUEST, fetchSinglePost),
      );
    });
  });

});
