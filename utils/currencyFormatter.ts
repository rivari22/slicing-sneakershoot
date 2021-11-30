export const currencyFormatter = (amount: number): string => {
  const isNegative = amount < 0;
  const i = Math.abs(Number(amount) || 0)
    .toFixed()
    .toString();
  const j = i.length > 3 ? i.length % 3 : 0;
  const format =
    (j ? i.substr(0, j) + '.' : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + '.');

  return `${isNegative ? '- IDR ' : 'IDR '}${format}`;
};
