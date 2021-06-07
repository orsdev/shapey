import actionTypes from '../actiontypes';
import * as TYPE from '../type';

export const addColors = (color: any): TYPE.ICOLORSOptions => {
  return ({
    type: actionTypes.ADD_COLORS,
    color: color
  })
}

export const removeColors = (color: any): TYPE.ICOLORSOptions => {
  return ({
    type: actionTypes.REMOVE_COLORS,
    color: color
  })
}