import { RootState } from "../reducers";

export function getComments(state: RootState) {
  return state.comments.data;
}

export function isDialogOpen(state: RootState) {
  return state.comments.dialogOpen;
}

export function getComment(state: RootState) {
  return state.comments.data.find(c => c.id === state.comments.commentId) || null;
}
