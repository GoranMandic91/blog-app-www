import { combineReducers } from 'redux';
import postsReducer from './posts/reducer';
import commentsReducer from './comments/reducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
