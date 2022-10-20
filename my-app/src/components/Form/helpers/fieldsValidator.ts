export const getMinDate = () => {
  const date = new Date();
  const [year, month, day] = [date.getFullYear() - 14, date.getMonth() + 1, date.getDate()];
  return new Date(year, month, day).getTime();
};
