import {
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  Comment, CommentsActionTypes,
  OPEN_COMMENT_DIALOG,
  CLOSE_COMMENT_DIALOG,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
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

export function openCommentDialog(id: number | null): CommentsActionTypes {
  return {
    type: OPEN_COMMENT_DIALOG,
    id
  };
}

export function closeCommentDialog(): CommentsActionTypes {
  return {
    type: CLOSE_COMMENT_DIALOG,
  };
}

export function createCommentRequest(postId: number, name: string, text: string): CommentsActionTypes {
  return {
    type: CREATE_COMMENT_REQUEST,
    postId,
    name,
    text
  };
}

export function createCommentSuccess(): CommentsActionTypes {
  return {
    type: CREATE_COMMENT_SUCCESS,
  };
}

export function createCommentFailure(): CommentsActionTypes {
  return {
    type: CREATE_COMMENT_FAILURE,
  };
}

export function updateCommentRequest(id: number, name: string, text: string): CommentsActionTypes {
  return {
    type: UPDATE_COMMENT_REQUEST,
    id,
    name,
    text
  };
}

export function updateCommentSuccess(): CommentsActionTypes {
  return {
    type: UPDATE_COMMENT_SUCCESS,
  };
}

export function updateCommentFailure(): CommentsActionTypes {
  return {
    type: UPDATE_COMMENT_FAILURE,
  };
}
