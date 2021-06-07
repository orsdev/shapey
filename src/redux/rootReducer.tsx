import { combineReducers } from 'redux';
import shapeReducer from './reducers/shapes.reducer';

export const rootReducer = combineReducers({
  shapes: shapeReducer
});

export type RootState = ReturnType<typeof rootReducer>;
