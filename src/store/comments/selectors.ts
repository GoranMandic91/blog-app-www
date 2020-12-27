import { RootState } from "../reducers";


export function getComments(state: RootState) {
  const comments = state.comments ? state.comments.data : []
  return comments;
}
