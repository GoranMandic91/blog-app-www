import { RootState } from "../reducers";

export function getPost(state: RootState) {
  const post = state.post ? state.post.data : null;
  return post;
}
