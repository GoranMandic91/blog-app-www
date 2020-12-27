export interface SinglePost {
  id: number
  title: string
  content: string
}

export interface SinglePostState {
  loading: boolean,
  loaded: boolean,
  data: SinglePost | null,
}

export const FETCH_SINGLE_POST_REQUEST = "FETCH_SINGLE_POST_REQUEST"
export const FETCH_SINGLE_POST_SUCCESS = "FETCH_SINGLE_POST_SUCCESS"
export const FETCH_SINGLE_POST_FAILURE = "FETCH_SINGLE_POST_FAILURE"

export interface FetchSinglePostRequestAction {
  type: typeof FETCH_SINGLE_POST_REQUEST
  id: string
}

interface FetchSinglePostSuccessAction {
  type: typeof FETCH_SINGLE_POST_SUCCESS
  data: SinglePost
}

interface FetchSinglePostFailureAction {
  type: typeof FETCH_SINGLE_POST_FAILURE
}

export type SinglePostActionTypes = FetchSinglePostRequestAction | FetchSinglePostSuccessAction | FetchSinglePostFailureAction
