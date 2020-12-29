import sagaTestingHelper from 'redux-saga-testing';
import { call, put, takeEvery } from 'redux-saga/effects';
import postsAPI from '../../services/posts';
import {
  fetchPostsFailure,
  fetchPostsSuccess,
} from './actions';
import {
  fetchPosts,
  watchFetchPostsRequest,
} from './saga';
import {
  FETCH_POSTS_REQUEST,
} from './types';

describe('posts saga', () => {

  describe('fetchPosts', () => {
    const response = {
      status: 201,
      data: {
        data: [{
          id: 1,
          title: 'title',
          content: 'content',
          numOfComments: 1
        }]
      }
    };

    describe('is succesfull', () => {
      const it = sagaTestingHelper(fetchPosts());

      it('calls postsAPI getAll', (result) => {
        expect(result).toEqual(call(postsAPI.getAll));
        return response;
      });

      it('puts fetchPostsSuccess', (result) => {
        expect(result).toEqual(put(fetchPostsSuccess(response.data.data)));
      });
    });

    describe('is not succesfull', () => {
      const it = sagaTestingHelper(fetchPosts());
      const e = new Error('error');
      it('throws at any point', () => e);

      it('puts fetchPostsFailure', (result) => {
        expect(result).toEqual(put(fetchPostsFailure()));
      });
    });

  });

  describe('watchFetchPostsRequest', () => {
    const it = sagaTestingHelper(watchFetchPostsRequest());

    it('takes every FETCH_POSTS_REQUEST', (result) => {
      expect(result).toEqual(
        takeEvery(FETCH_POSTS_REQUEST, fetchPosts),
      );
    });
  });

});
