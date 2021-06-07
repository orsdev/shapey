import { combineReducers } from 'redux';
import colorsReducer from './reducers/colors.reducer';
import shapeReducer from './reducers/shapes.reducer';

export const rootReducer = combineReducers({
  shapes: shapeReducer,
  colors: colorsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
