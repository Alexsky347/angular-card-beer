export type Options<Result> = {
  isImmediate?: boolean;
  maxWait?: number;
  callback?: (result: Result) => void;
};
