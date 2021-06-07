export const addNewShape = (shapes, shapesToBeAdded) => {
  if (typeof shapesToBeAdded == 'string') {
    shapes.push(shapesToBeAdded);
  }

  if (Array.isArray(shapesToBeAdded)) {
    shapes = shapesToBeAdded;
  }

  return shapes;
};
