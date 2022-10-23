import { useState } from 'react';

export const useSuccess = () => {
  const [success, setSuccess] = useState<boolean>(false);

  const viewSuccess = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 1000);
  };

  return { success, viewSuccess };
};
