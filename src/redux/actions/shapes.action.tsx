import actionTypes from '../actiontypes';
import * as TYPE from '../type';

export const addShapes = (shape: any): TYPE.IShapeOptions => {
  return ({
    type: actionTypes.ADD_SHAPES,
    shape: shape
  })
}

export const removeShapes = (shape: any): TYPE.IShapeOptions => {
  return ({
    type: actionTypes.REMOVE_SHAPES,
    shape: shape
  })
}