import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  Post, PostsActionTypes
} from "./types";

export function fetchPostsRequest(): PostsActionTypes {
  return {
    type: FETCH_POSTS_REQUEST,
  };
}

export function fetchPostsSuccess(data: Post[]): PostsActionTypes {
  return {
    type: FETCH_POSTS_SUCCESS,
    data
  };
}

export function fetchPostsFailure(): PostsActionTypes {
  return {
    type: FETCH_POSTS_FAILURE,
  };
}
