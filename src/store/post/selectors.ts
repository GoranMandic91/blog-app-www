import { RootState } from "../reducers";

export function getPost(state: RootState) {
  return state.post.data;
}

export function getPostId(state: RootState) {
  return state.post.data?.id || null;
}
