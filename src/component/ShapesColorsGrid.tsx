import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addShapes } from '../redux/actions/shapes.action';
import { RootState } from '../redux/rootReducer';
import Data from '../data.json';

const ShapesColorsGrid: React.FC = () => {
  const { shapes } = useSelector(
    (state: RootState) => state.shapes);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(addShapes(Data.shapes));
  }, [])

  return (
    <section className="grid">
      <h4 className="grid-title">Title</h4>
      <ul className="grid-items">
        {shapes.map((value: string, index: number) => {
          return (
            <li key={index}>
              <span className="oval red" />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ShapesColorsGrid;
