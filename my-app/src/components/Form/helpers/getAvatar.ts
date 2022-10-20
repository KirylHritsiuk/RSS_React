export const getAvatar = (data: File[] | null) => {
  if (data && data[0]) {
    return URL.createObjectURL(data[0]);
  }
  return null;
};
