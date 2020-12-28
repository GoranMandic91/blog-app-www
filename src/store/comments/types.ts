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
  commentId: number | null,
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

export const OPEN_COMMENT_DIALOG = "OPEN_COMMENT_DIALOG"
export const CLOSE_COMMENT_DIALOG = "CLOSE_COMMENT_DIALOG"

interface OpenCommentDialogAction {
  type: typeof OPEN_COMMENT_DIALOG,
  id: number | null
}

interface CloseCommentDialogAction {
  type: typeof CLOSE_COMMENT_DIALOG
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

export const UPDATE_COMMENT_REQUEST = "UPDATE_COMMENT_REQUEST"
export const UPDATE_COMMENT_SUCCESS = "UPDATE_COMMENT_SUCCESS"
export const UPDATE_COMMENT_FAILURE = "UPDATE_COMMENT_FAILURE"

export interface UpdateCommentRequestAction {
  type: typeof UPDATE_COMMENT_REQUEST,
  id: number,
  name: string,
  text: string,
}

interface UpdateCommentSuccessAction {
  type: typeof UPDATE_COMMENT_SUCCESS
}

interface UpdateCommentFailureAction {
  type: typeof UPDATE_COMMENT_FAILURE
}

export type CommentsActionTypes = FetchCommentsRequestAction | FetchCommentsSuccessAction | FetchCommentsFailureAction
  | OpenCommentDialogAction | CloseCommentDialogAction | CreateCommentRequestAction | CreateCommentSuccessAction
  | CreateCommentFailureAction | UpdateCommentRequestAction | UpdateCommentSuccessAction | UpdateCommentFailureAction;
