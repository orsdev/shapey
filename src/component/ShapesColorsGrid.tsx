import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addShapes } from '../redux/actions/shapes.action';
import { addColors } from '../redux/actions/colors.action';
import { RootState } from '../redux/rootReducer';
import Data from '../data.json';

const ShapesColorsGrid: React.FC = () => {
  const { shapes } = useSelector(
    (state: RootState) => state.shapes);

  const { colors } = useSelector(
    (state: RootState) => state.colors);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(addShapes(Data.shapes));
    dispatch(addColors(Data.colors));
  }, [])

  return (
    <section className="grid">
      <h4 className="grid-title">All items</h4>
      <ul className="grid-items">
        {shapes.map((shape: string) => {
          return colors.map((color: string, index: number) => {
            return (
              <li key={index}>
                <span className={`${shape} ${color}`} />
              </li>
            )
          })
        })}
      </ul>
    </section>
  )
}

export default ShapesColorsGrid;
