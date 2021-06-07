import React from 'react';
import { RootState } from '../../redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { addColors, removeColors } from '../../redux/actions/colors.action';
import Data from '../../data.json';

const Colors = () => {
  const { colors } = useSelector(
    (state: RootState) => state.colors);

  const dispatch = useDispatch();
  const [checkedState, setCheckedState] = React.useState(
    new Array(Data.colors.length).fill(true)
  );

  React.useEffect(() => {
    if (!colors.length) {
      dispatch(addColors(Data.colors));
      setCheckedState(new Array(Data.colors.length).fill(true))
    }
  }, [colors.length]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, position: number) => {
    const { target } = e;

    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    if (target.checked) {
      dispatch(addColors(target.name))
    } else {
      dispatch(removeColors(target.name))
    }
  }

  return (
    <section className="colors">
      <h4 className="colors-title">Colors</h4>
      <ul className="colors-type">
        {Data.colors.map((color, index) => (
          <li key={index}>
            <input type="checkbox" name={color} id={color} checked={checkedState[index]} onChange={(e) => onChangeHandler(e, index)} />
            <label htmlFor={color} className={color} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Colors
