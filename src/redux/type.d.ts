export interface ISHAPEState {
  shapes: string[] | [];
}


export type SHAPEAction = {
  type: 'ADD_SHAPES',
  shape: [] | string
} | {
  type: 'REMOVE_SHAPE',
 shape: [] | string
};

export interface IShapeOptions {
  type: string;
  shape: string
};
