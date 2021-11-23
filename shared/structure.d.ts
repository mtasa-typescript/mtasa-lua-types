// TODO: make something with that

export type iterator = unknown;

export type HandleFunction = (this: void, ...args: any[]) => any;
export type TimerCallbackFunction = (this: void, ...args: any[]) => void;

export { Vector2, Vector3, Vector4, Matrix } from './vector';
