import { combineReducers } from 'redux';
import postsReducer from './posts/reducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
