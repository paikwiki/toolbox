const mutate = <T>(acc: T[][], size: number, curr: T) => {
  acc[acc.length - 1].length === size
    ? acc.push([curr])
    : acc[acc.length - 1].push(curr);

  return acc;
};
const createChunk = <T>(arr: T[], size: number) =>
  arr.reduce(
    (acc: T[][], curr) =>
      acc.length === 0 ? [[curr]] : mutate(acc, size, curr),
    []
  );

export const chunk = <T>(arr: T[], size: number = 1): T[][] =>
  size > 0 ? createChunk(arr, size) : [];
