export const getMaxDate = () =>
  `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;

export const getMinDate = () =>
  `${new Date().getFullYear() - 120}-${new Date().getMonth() + 1}-${new Date().getDate() - 1}`;

export const getMinValidDate = () => {
  const date = new Date();
  const [year, month, day] = [date.getFullYear() - 14, date.getMonth() + 1, date.getDate()];
  return new Date(year, month, day).getTime();
};
