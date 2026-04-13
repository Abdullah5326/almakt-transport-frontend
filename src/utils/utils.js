export function parseDate(date) {
  return new Date(date).toLocaleDateString();
}

export function countItemsByStatus(items, statusName) {
  let initialValue = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i].isCompleted) initialValue++;
    continue;
  }

  return initialValue;
}

export function formatCurrency(amount) {
  if (!amount) return "-";
  const formatAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "AED",
  });
  console.log(formatAmount.format(amount));
  return formatAmount.format(amount);
}
