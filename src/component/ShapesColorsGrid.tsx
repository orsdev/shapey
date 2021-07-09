import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addShapes } from '../redux/actions/shapes.action';
import { addColors } from '../redux/actions/colors.action';
import { RootState } from '../redux/rootReducer';
import Data from '../data.json';

const allSelectedItems = (items: string[], type: string): boolean => {

  if (type === 'colors') {
    return Data.colors.every((color) => {
      return items.includes(color);
    })
  } else {
    return Data.shapes.every((shape) => {
      return items.includes(shape);
    })
  }
}


const updateTitle = (shapes: string[], colors: string[]): string => {
  let title;

  if (allSelectedItems(colors, 'colors') && allSelectedItems(shapes, 'shapes')) {
    title = 'All Items';
  } else if (shapes.length === 1 && colors.length === 1) {
    title = `${shapes.join("")} ${colors.join("")} Item`;
  } else if (allSelectedItems(colors, 'colors') && shapes.length === 1) {
    title = `All ${shapes.join("")} Items`;
  } else if (allSelectedItems(shapes, 'shapes') && colors.length === 1) {
    title = `All ${colors.join("")} Items`;
  } else if ((allSelectedItems(colors, 'colors') && shapes.length > 1)
    || (allSelectedItems(shapes, 'shapes') && colors.length > 1)) {
    title = `Multiple Items`;
  } else if (shapes.length === 1 && colors.length > 1) {
    title = `Multiple ${shapes.join("")} Items`
  } else if (shapes.length > 1 && colors.length === 1) {
    title = `Multiple ${colors.join("")} Items`
  } else {
    title = 'Multiple Items';
  }
  return title;
}

const ShapesColorsGrid: React.FC = () => {
  const { shapes } = useSelector(
    (state: RootState) => state.shapes);

  const { colors } = useSelector(
    (state: RootState) => state.colors);
  const dispatch = useDispatch();

  const [title, setTitle] = React.useState('All Items');

  React.useEffect(() => {
    dispatch(addShapes(Data.shapes));
    dispatch(addColors(Data.colors));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    if (shapes.length || colors.length) {
      const updatedTitle = updateTitle(shapes, colors);
      setTitle(updatedTitle);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shapes.length, colors.length])


  return (
    <section className="grid">
      <h4 className="grid-title">{title}</h4>
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
