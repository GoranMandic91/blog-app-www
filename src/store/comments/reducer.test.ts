import commentsReducer from './reducer';
import * as action from './actions';
import { CommentsActionTypes } from './types';

describe('commentsReducer', () => {
  const defaultState = commentsReducer(undefined, action.updateCommentSuccess());

  it('has default state', () => {
    expect(defaultState).toEqual({
      loading: false,
      loaded: false,
      dialogOpen: false,
      commentId: null,
      data: [],
    });
  });

  it('return current state', () => {
    const newState = commentsReducer(defaultState, { type: '' } as unknown as CommentsActionTypes);
    expect(newState).toBe(defaultState);
  });

  it('updates state on FETCH_COMMENTS_REQUEST', () => {
    const newState = commentsReducer(defaultState, action.fetchCommentsRequest('1'));

    expect(newState).not.toBe(defaultState);
    expect(newState).toEqual({
      loading: true,
      loaded: false,
      dialogOpen: false,
      commentId: null,
      data: [],
    });


  });

  it('updates state on FETCH_COMMENTS_SUCCESS', () => {
    const newState = commentsReducer(defaultState, action.fetchCommentsSuccess([{
      id: 1,
      name: 'name',
      text: 'text',
      postId: 1,
    }]));

    expect(newState).not.toBe(defaultState);
    expect(newState).toEqual({
      loading: false,
      loaded: true,
      dialogOpen: false,
      commentId: null,
      data: [{
        id: 1,
        name: 'name',
        text: 'text',
        postId: 1,
      }],
    });
  });

  it('updates state on FETCH_COMMENTS_FAILURE', () => {
    const newState = commentsReducer(defaultState, action.fetchCommentsFailure());

    expect(newState).not.toBe(defaultState);
    expect(newState).toEqual({
      loading: false,
      loaded: false,
      dialogOpen: false,
      commentId: null,
      data: [],
    });
  });

  it('updates state on OPEN_COMMENT_DIALOG', () => {
    const newState = commentsReducer(defaultState, action.openCommentDialog(1));

    expect(newState).not.toBe(defaultState);
    expect(newState).toEqual({
      loading: false,
      loaded: false,
      dialogOpen: true,
      commentId: 1,
      data: [],
    });
  });

  it('updates state on CLOSE_COMMENT_DIALOG', () => {
    const newState = commentsReducer(defaultState, action.closeCommentDialog());

    expect(newState).not.toBe(defaultState);
    expect(newState).toEqual({
      loading: false,
      loaded: false,
      dialogOpen: false,
      commentId: null,
      data: [],
    });
  });

});
