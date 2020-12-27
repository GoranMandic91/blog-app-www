import {
  FETCH_SINGLE_POST_REQUEST,
  FETCH_SINGLE_POST_SUCCESS,
  FETCH_SINGLE_POST_FAILURE,
  SinglePostState,
  SinglePostActionTypes,
} from './types';

const initalState: SinglePostState = {
  loading: false,
  loaded: false,
  data: null
};

export default function siglePostReducer(state = initalState, action: SinglePostActionTypes) {
  switch (action.type) {
    case FETCH_SINGLE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SINGLE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.data,
      };
    case FETCH_SINGLE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    default:
      return state;
  }
}
