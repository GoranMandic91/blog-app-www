export interface Comment {
  id: number
  name: string
  text: string
  postId: number
}

export interface CommentsState {
  loading: boolean,
  loaded: boolean,
  data: Comment[],
}

export const FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST"
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS"
export const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE"

export interface FetchCommentsRequestAction {
  type: typeof FETCH_COMMENTS_REQUEST,
  id: string
}

interface FetchCommentsSuccessAction {
  type: typeof FETCH_COMMENTS_SUCCESS
  data: Comment[]
}

interface FetchCommentsFailureAction {
  type: typeof FETCH_COMMENTS_FAILURE
}

export type CommentsActionTypes = FetchCommentsRequestAction | FetchCommentsSuccessAction | FetchCommentsFailureAction
