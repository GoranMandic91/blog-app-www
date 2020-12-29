import sagaTestingHelper from 'redux-saga-testing';
import { call, put, takeEvery } from 'redux-saga/effects';
import commentsAPI from '../../services/comments';
import postsAPI from '../../services/posts';
import { fetchPostsRequest } from '../posts/actions';
import {
  createCommentFailure,
  createCommentSuccess,
  fetchCommentsFailure,
  fetchCommentsRequest,
  fetchCommentsSuccess,
  updateCommentFailure,
  updateCommentSuccess
} from './actions';
import {
  createComment,
  fetchComments,
  updateComment,
  watchCreateCommentRequest,
  watchFetchCommentsRequest,
  watchUpdateCommentRequest
} from './saga';
import {
  UPDATE_COMMENT_REQUEST,
  CREATE_COMMENT_REQUEST,
  UpdateCommentRequestAction,
  CreateCommentRequestAction,
  FETCH_COMMENTS_REQUEST,
  FetchCommentsRequestAction,
} from './types';

describe('comments saga', () => {

  describe('fetchComments', () => {
    const action: FetchCommentsRequestAction = {
      type: "FETCH_COMMENTS_REQUEST",
      id: '1',
    };

    const response = {
      status: 201,
      data: {
        data: [{
          id: 1,
          name: 'name',
          text: 'text',
          postId: 1
        }]
      }
    };

    describe('is succesfull', () => {
      const it = sagaTestingHelper(fetchComments(action));

      it('calls postsAPI getAllComments', (result) => {
        expect(result).toEqual(call(postsAPI.getAllComments, action.id));
        return response;
      });

      it('puts fetchCommentsSuccess', (result) => {
        expect(result).toEqual(put(fetchCommentsSuccess(response.data.data)));
      });
    });

    describe('is not succesfull', () => {
      const it = sagaTestingHelper(fetchComments(action));
      const e = new Error('error');
      it('throws at any point', () => e);

      it('puts createCommentFailure', (result) => {
        expect(result).toEqual(put(fetchCommentsFailure()));
      });
    });

  });

  describe('watchFetchCommentsRequest', () => {
    const it = sagaTestingHelper(watchFetchCommentsRequest());

    it('takes every FETCH_COMMENTS_REQUEST', (result) => {
      expect(result).toEqual(
        takeEvery(FETCH_COMMENTS_REQUEST, fetchComments),
      );
    });
  });

  describe('createComment', () => {
    const action: CreateCommentRequestAction = {
      type: "CREATE_COMMENT_REQUEST",
      postId: 1,
      name: 'name',
      text: 'text',
    };

    const response = { status: 201, data: { data: { postId: '1' } } };

    describe('is succesfull', () => {
      const it = sagaTestingHelper(createComment(action));

      it('calls commentsAPI update', (result) => {
        expect(result).toEqual(call(commentsAPI.create, action.postId, action.name, action.text));
        return response;
      });

      it('puts createCommentSuccess', (result) => {
        expect(result).toEqual(put(createCommentSuccess()));
      });

      it('puts fetchCommentsRequest', (result) => {
        expect(result).toEqual(put(fetchCommentsRequest('1')));
      });
      it('puts fetchPostsRequest', (result) => {
        expect(result).toEqual(put(fetchPostsRequest()));
      });
    });

    describe('is not succesfull', () => {
      const it = sagaTestingHelper(createComment(action));
      const e = new Error('error');
      it('throws at any point', () => e);

      it('puts createCommentFailure', (result) => {
        expect(result).toEqual(put(createCommentFailure()));
      });
    });

  });

  describe('watchCreateCommentRequest', () => {
    const it = sagaTestingHelper(watchCreateCommentRequest());

    it('takes every CREATE_COMMENT_REQUEST', (result) => {
      expect(result).toEqual(
        takeEvery(CREATE_COMMENT_REQUEST, createComment),
      );
    });
  });

  describe('updateComment', () => {
    const action: UpdateCommentRequestAction = {
      type: "UPDATE_COMMENT_REQUEST",
      id: 1,
      name: 'name',
      text: 'text',
    };

    const response = { status: 201, data: { data: { postId: '1' } } };

    describe('is succesfull', () => {
      const it = sagaTestingHelper(updateComment(action));

      it('calls commentsAPI update', (result) => {
        expect(result).toEqual(call(commentsAPI.update, action.id, action.name, action.text));
        return response;
      });

      it('puts fetchCommentsRequest', (result) => {
        expect(result).toEqual(put(fetchCommentsRequest(response.data.data.postId)));
      });

      it('puts updateCommentSuccess', (result) => {
        expect(result).toEqual(put(updateCommentSuccess()));
      });
    });


    describe('is not succesfull', () => {
      const it = sagaTestingHelper(updateComment(action));
      const e = new Error('error');
      it('throws at any point', () => e);

      it('puts updateCommentFailure', (result) => {
        expect(result).toEqual(put(updateCommentFailure()));
      });
    });

  });

  describe('watchUpdateCommentRequest', () => {
    const it = sagaTestingHelper(watchUpdateCommentRequest());

    it('takes every UPDATE_COMMENT_REQUEST', (result) => {
      expect(result).toEqual(
        takeEvery(UPDATE_COMMENT_REQUEST, updateComment),
      );
    });
  });

});
