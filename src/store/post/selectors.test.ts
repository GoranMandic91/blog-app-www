import { RootState } from '../reducers';
import {
  getPost,
  getPostId
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

describe('getPost', () => {
  it('return post', () => {
    expect(getPost({
      ...initialState, post: {
        loading: false,
        loaded: true,
        data: {
          id: 1,
          title: 'title',
          content: 'content',
        }
      }
    })).toEqual({
      id: 1,
      title: 'title',
      content: 'content',
    });
  });
  it('return null', () => {
    expect(getPostId(initialState)).toEqual(null);
  });
});

describe('getPostId', () => {
  it('return post id', () => {
    expect(getPostId({
      ...initialState, post: {
        loading: false,
        loaded: true,
        data: {
          id: 1,
          title: 'title',
          content: 'content',
        }
      }
    })).toEqual(1);
  });

  it('return null', () => {
    expect(getPostId(initialState)).toEqual(null);
  });
});

