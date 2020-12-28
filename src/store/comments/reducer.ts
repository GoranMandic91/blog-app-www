import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  CommentsState,
  CommentsActionTypes,
  OPEN_COMMENT_DIALOG,
  CLOSE_COMMENT_DIALOG,
} from './types';

const initalState: CommentsState = {
  loading: false,
  loaded: false,
  dialogOpen: false,
  commentId: null,
  data: [],
};

export default function postsReducer(state = initalState, action: CommentsActionTypes) {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.data,
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    case OPEN_COMMENT_DIALOG:
      return {
        ...state,
        dialogOpen: true,
        commentId: action.id
      };
    case CLOSE_COMMENT_DIALOG:
      return {
        ...state,
        dialogOpen: false,
        commentId: null
      };
    default:
      return state;
  }
}
