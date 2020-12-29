import { RootState } from '../reducers';
import {
  getPosts
} from './selectors';

describe('getPosts', () => {
  it('return posts', () => {
    const state: RootState = {
      posts: {
        loading: false,
        loaded: true,
        data: [{
          id: 1,
          title: 'title',
          content: 'content',
          numOfComments: 1
        }]
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

    expect(getPosts(state)).toEqual(state.posts.data);
  });
});
