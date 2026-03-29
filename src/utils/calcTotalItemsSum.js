export function calcTotalItemsSum(items, attributeName) {
  const result = items.reduce((prev, cur) => {
    return prev + cur[attributeName];
  }, 0);
  return result;
}
