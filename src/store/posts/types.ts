export interface Post {
  id: number
  title: string
  content: number
  numOfComments: number
}

export interface PostsState {
  loading: boolean,
  loaded: boolean,
  data: Post[],
}

export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST"
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE"

interface FetchPostsRequestAction {
  type: typeof FETCH_POSTS_REQUEST
}

interface FetchPostsSuccessAction {
  type: typeof FETCH_POSTS_SUCCESS
  data: Post[]
}

interface FetchPostsFailureAction {
  type: typeof FETCH_POSTS_FAILURE
}

export type PostsActionTypes = FetchPostsRequestAction | FetchPostsSuccessAction | FetchPostsFailureAction
