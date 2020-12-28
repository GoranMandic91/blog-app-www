export interface Comment {
  id: number
  name: string
  text: string
  postId: number
}

export interface CommentsState {
  loading: boolean,
  loaded: boolean,
  dialogOpen: boolean,
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

export const OPEN_CREATE_COMMENT_DIALOG = "OPEN_CREATE_COMMENT_DIALOG"
export const CLOSE_CREATE_COMMENT_DIALOG = "CLOSE_CREATE_COMMENT_DIALOG"

interface OpenCreateCommentDialogAction {
  type: typeof OPEN_CREATE_COMMENT_DIALOG
}

interface CloseCreateCommentDialogAction {
  type: typeof CLOSE_CREATE_COMMENT_DIALOG
}

export const CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST"
export const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS"
export const CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE"

export interface CreateCommentRequestAction {
  type: typeof CREATE_COMMENT_REQUEST,
  postId: number,
  name: string,
  text: string,
}

interface CreateCommentSuccessAction {
  type: typeof CREATE_COMMENT_SUCCESS
}

interface CreateCommentFailureAction {
  type: typeof CREATE_COMMENT_FAILURE
}

export type CommentsActionTypes = FetchCommentsRequestAction | FetchCommentsSuccessAction | FetchCommentsFailureAction
  | OpenCreateCommentDialogAction | CloseCreateCommentDialogAction | CreateCommentRequestAction | CreateCommentSuccessAction | CreateCommentFailureAction;
