export const getPage = (prev: string | null) => {
  if (prev) {
    const result = prev.match(/page=\d+/g);
    return result ? parseInt(result[0].slice(5)) + 1 : 1;
  }
  return 1;
};
