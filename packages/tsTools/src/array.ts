export const map = <T, P>(arr: T[], fn: (item: T) => P): P[] => arr.map(fn);

export const forEach = <T>(arr: T[], fn: (item: T) => void): void => {
  arr.forEach(fn);
};

export const filter = <T>(arr: T[], fn: (item: T) => boolean): T[] =>
  arr.filter(fn);

export const slice = <T>(arr: T[], start?: number, end?: number): T[] =>
  [...arr].slice(start, end);

export const concat = <T>(arr1: T[], arr2: T[]): T[] => arr1.concat(arr2);

export const arrayEntries = <T>(arr: T[]): IterableIterator<[number, T]> =>
  arr.entries();

export const copyWithin = <T>(
  arr: T[],
  target?: number,
  start?: number,
  end?: number
) => [...arr].copyWithin(target ?? 0, start, end);

export const every = <T>(arr: T[], fn: (item: T) => boolean): boolean =>
  arr.every(fn);

export const some = <T>(arr: T[], fn: (item: T) => boolean): boolean =>
  arr.some(fn);

export const fill = <T>(arr: T[], value: T): T[] => [...arr].fill(value);

export const join = <T>(arr: T[], separator?: string): string =>
  arr.join(separator);
