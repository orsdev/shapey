export interface ISHAPEState {
  shapes: string[] | [];
}

export interface ICOLORSState {
  colors: string[] | [];
}


export type COLORSAction = {
  type: 'ADD_COLORS',
  color: [] | string
} | {
  type: 'REMOVE_COLORS',
 color: [] | string
};

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

export interface ICOLORSOptions {
  type: string;
  color: string
};
