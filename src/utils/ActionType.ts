export type ActionType<T extends (...args: any[]) => ReturnType<T>> = (
  payload?: Parameters<T>[1]
) => ReturnType<T>;
