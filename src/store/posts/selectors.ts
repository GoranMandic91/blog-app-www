import { RootState } from "../reducers";


export function getPosts(state: RootState) {
  const posts = state.posts ? state.posts.data : []
  return posts;
}
