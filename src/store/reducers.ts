import { combineReducers } from 'redux';
import singlePostReducer from './post/reducer';
import postsReducer from './posts/reducer';
import commentsReducer from './comments/reducer';

export const rootReducer = combineReducers({
  post: singlePostReducer,
  posts: postsReducer,
  comments: commentsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
