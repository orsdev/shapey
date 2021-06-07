import actionTypes from '../actiontypes';
import * as TYPE from '../type';
import { addNewShape } from '../utils/helper';

const initialState = {
  shapes: []
}

function shapesReducer(state: TYPE.ISHAPEState = initialState, action: TYPE.SHAPEAction): TYPE.ISHAPEState {
  switch (action.type) {
    case actionTypes.ADD_SHAPES:
      return { shapes: addNewShape(state.shapes, action.shape) };
    case actionTypes.REMOVE_SHAPES:
      return { shapes: state.shapes.filter(shape => shape !== action.shape) };
    default:
      return state;
  }
}

export default shapesReducer;