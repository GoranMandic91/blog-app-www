import { RootState } from '../reducers';
import {
  getComments,
  isDialogOpen,
  getComment
} from './selectors';

const initialState: RootState = {
  posts: {
    loading: false,
    loaded: true,
    data: []
  },
  post: {
    loading: false,
    loaded: true,
    data: null
  },
  comments: {
    loading: false,
    loaded: true,
    dialogOpen: false,
    commentId: null,
    data: []
  }
};

describe('getComments', () => {
  it('return comments', () => {
    expect(getComments({
      ...initialState,
      comments: {
        loading: false,
        loaded: true,
        dialogOpen: false,
        commentId: null,
        data: [{
          id: 1,
          name: 'name',
          text: 'text',
          postId: 1
        }]
      }
    })).toEqual([{
      id: 1,
      name: 'name',
      text: 'text',
      postId: 1
    }]);
  });
  it('return null', () => {
    expect(getComments(initialState)).toEqual([]);
  });
});

describe('isDialogOpen', () => {
  it('return true if dialog is open', () => {
    expect(isDialogOpen({
      ...initialState,
      comments: {
        loading: false,
        loaded: true,
        dialogOpen: true,
        commentId: 1,
        data: [{
          id: 1,
          name: 'name',
          text: 'text',
          postId: 1
        }]
      }
    })).toEqual(true);
  });

  it('return false if dialog is not open', () => {
    expect(isDialogOpen({
      ...initialState,
      comments: {
        loading: false,
        loaded: true,
        dialogOpen: false,
        commentId: null,
        data: [{
          id: 1,
          name: 'name',
          text: 'text',
          postId: 1
        }]
      }
    })).toEqual(false);
  });
});


describe('getComment', () => {
  it('return post id', () => {
    expect(getComment({
      ...initialState,
      comments: {
        loading: false,
        loaded: true,
        dialogOpen: false,
        commentId: 1,
        data: [{
          id: 1,
          name: 'name',
          text: 'text',
          postId: 1
        }]
      }
    })).toEqual({
      id: 1,
      name: 'name',
      text: 'text',
      postId: 1
    });
  });

  it('return null', () => {
    expect(getComment(initialState)).toEqual(null);
  });
});

