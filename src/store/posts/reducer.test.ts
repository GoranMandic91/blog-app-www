import postsReducer from './reducer';
import * as action from './actions';
import { PostsActionTypes } from './types';

describe('postsReducer', () => {
  const defaultState = postsReducer(undefined, action.fetchPostsFailure());

  it('has default state', () => {
    expect(defaultState).toEqual({
      loading: false,
      loaded: false,
      data: [],
    });
  });

  it('return current state', () => {
    const newState = postsReducer(defaultState, { type: '' } as unknown as PostsActionTypes);
    expect(newState).toBe(defaultState);
  });

  it('updates state on FETCH_POSTS_REQUEST', () => {
    const newState = postsReducer(defaultState, action.fetchPostsRequest());

    expect(newState).not.toBe(defaultState);
    expect(newState).toEqual({
      loading: true,
      loaded: false,
      data: [],
    });
  });

  it('updates state on FETCH_POSTS_SUCCESS', () => {
    const newState = postsReducer(defaultState, action.fetchPostsSuccess([{
      id: 1,
      title: 'title',
      content: 'content',
      numOfComments: 1,
    }]));

    expect(newState).not.toBe(defaultState);
    expect(newState).toEqual({
      loading: false,
      loaded: true,
      data: [{
        id: 1,
        title: 'title',
        content: 'content',
        numOfComments: 1,
      }],
    });
  });

  it('updates state on FETCH_POSTS_FAILURE', () => {
    const newState = postsReducer(defaultState, action.fetchPostsFailure());

    expect(newState).not.toBe(defaultState);
    expect(newState).toEqual({
      loading: false,
      loaded: false,
      data: [],
    });
  });

});
