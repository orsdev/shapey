import React from 'react';
import { RootState } from '../../redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { addShapes, removeShapes } from '../../redux/actions/shapes.action';
import Data from '../../data.json';

const Shapes_List = ['oval', 'round', 'triangle', 'square', 'rectangle'];

const Shapes = () => {
  const { shapes } = useSelector(
    (state: RootState) => state.shapes);

  const dispatch = useDispatch();
  const [checkedState, setCheckedState] = React.useState(
    new Array(Data.shapes.length).fill(true)
  );

  React.useEffect(() => {
    if (!shapes.length) {
      dispatch(addShapes(Data.shapes));
      setCheckedState(new Array(Data.shapes.length).fill(true))
    }
  }, [shapes.length]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, position: number) => {
    const { target } = e;

    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    if (target.checked) {
      dispatch(addShapes(target.name))
    } else {
      dispatch(removeShapes(target.name))
    }
  }


  return (
    <section className="shapes">
      <h4 className="shapes-title">Shapes</h4>
      <ul className="shapes-type">
        {Shapes_List.map((shape, index) => (
          <li key={index}>
            <input type="checkbox" name={shape} id={shape} checked={checkedState[index]} onChange={(e) => onChangeHandler(e, index)} />
            <label htmlFor={shape} className={shape}>{shape}</label>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Shapes
