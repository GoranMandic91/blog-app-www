import { RootState } from "../reducers";

export function getComments(state: RootState) {
  const comments = state.comments ? state.comments.data : []
  return comments;
}

export function isDialogOpen(state: RootState) {
  return state.comments.dialogOpen;
}

export function getComment(state: RootState) {
  const comments = state.comments;
  return comments.commentId ? comments.data.find(c => c.id === comments.commentId) || null : null;
}
