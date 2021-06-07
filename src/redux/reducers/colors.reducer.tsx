import actionTypes from '../actiontypes';
import * as TYPE from '../type';
import { addNewColor } from '../utils/helper';

const initialState = {
  colors: []
}

function colorsReducer(state: TYPE.ICOLORSState = initialState, action: TYPE.COLORSAction): TYPE.ICOLORSState {
  switch (action.type) {
    case actionTypes.ADD_COLORS:
      return { colors: addNewColor(state.colors, action.color) };
    case actionTypes.REMOVE_COLORS:
      return { colors: state.colors.filter(color => color !== action.color) };
    default:
      return state;
  }
}

export default colorsReducer;