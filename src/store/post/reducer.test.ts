import postReducer from './reducer';
import * as action from './actions';
import { SinglePostActionTypes } from './types';

describe('postsReducer', () => {
  const defaultState = postReducer(undefined, action.fetchSinglePostFailure());

  it('has default state', () => {
    expect(defaultState).toEqual({
      loading: false,
      loaded: false,
      data: null,
    });
  });

  it('return current state', () => {
    const newState = postReducer(defaultState, { type: '' } as unknown as SinglePostActionTypes);
    expect(newState).toBe(defaultState);
  });

  it('updates state on FETCH_SINGLE_POST_REQUEST', () => {
    const newState = postReducer(defaultState, action.fetchSinglePostRequest('1'));

    expect(newState).not.toBe(defaultState);
    expect(newState).toEqual({
      loading: true,
      loaded: false,
      data: null,
    });
  });

  it('updates state on FETCH_SINGLE_POST_SUCCESS', () => {
    const newState = postReducer(defaultState, action.fetchSinglePostSuccess({
      id: 1,
      title: 'title',
      content: 'content',
    }));

    expect(newState).not.toBe(defaultState);
    expect(newState).toEqual({
      loading: false,
      loaded: true,
      data: {
        id: 1,
        title: 'title',
        content: 'content',
      },
    });
  });

  it('updates state on FETCH_SINGLE_POST_FAILURE', () => {
    const newState = postReducer(defaultState, action.fetchSinglePostFailure());

    expect(newState).not.toBe(defaultState);
    expect(newState).toEqual({
      loading: false,
      loaded: false,
      data: null,
    });
  });

});
