export function calcTotalItemsSum(items, attributeName) {
  const result = items.reduce((prev, cur) => prev + cur[attributeName], 0);

  return result;
}
