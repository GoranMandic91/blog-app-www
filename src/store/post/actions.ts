import {
  FETCH_SINGLE_POST_FAILURE,
  FETCH_SINGLE_POST_REQUEST,
  FETCH_SINGLE_POST_SUCCESS,
  SinglePost, SinglePostActionTypes
} from "./types";

export function fetchSinglePostRequest(id: string): SinglePostActionTypes {
  return {
    type: FETCH_SINGLE_POST_REQUEST,
    id
  };
}

export function fetchSinglePostSuccess(data: SinglePost): SinglePostActionTypes {
  return {
    type: FETCH_SINGLE_POST_SUCCESS,
    data
  };
}

export function fetchSinglePostFailure(): SinglePostActionTypes {
  return {
    type: FETCH_SINGLE_POST_FAILURE,
  };
}
