import {
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  Comment, CommentsActionTypes
} from "./types";

export function fetchCommentsRequest(id: string): CommentsActionTypes {
  return {
    type: FETCH_COMMENTS_REQUEST,
    id
  };
}

export function fetchCommentsSuccess(data: Comment[]): CommentsActionTypes {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    data
  };
}

export function fetchCommentsFailure(): CommentsActionTypes {
  return {
    type: FETCH_COMMENTS_FAILURE,
  };
}
