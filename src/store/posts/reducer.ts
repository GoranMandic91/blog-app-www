import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  PostsState,
  PostsActionTypes,
} from './types';

const initalState: PostsState = {
  loading: false,
  loaded: false,
  data: [],
};

export default function postsReducer(state = initalState, action: PostsActionTypes) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.data,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    default:
      return state;
  }
}
