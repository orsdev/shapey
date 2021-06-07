export const addNewShape = (shapes, shapesToBeAdded) => {
  if (typeof shapesToBeAdded == 'string') {
    shapes.push(shapesToBeAdded);
  }

  if (Array.isArray(shapesToBeAdded)) {
    shapes = shapesToBeAdded;
  }

  return shapes;
};

export const addNewColor = (color, colorsToBeAdded) => {
  if (typeof colorsToBeAdded == 'string') {
    color.push(colorsToBeAdded);
  }

  if (Array.isArray(colorsToBeAdded)) {
    color = colorsToBeAdded;
  }

  return color;
};
