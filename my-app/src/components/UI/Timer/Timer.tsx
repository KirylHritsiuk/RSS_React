import { useEffect, useState } from 'react';

interface TimerProps extends React.HTMLAttributes<HTMLSpanElement> {
  time: number;
}

export const Timer = ({ time }: TimerProps): JSX.Element => {
  const [counter, setCounter] = useState(time);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <>
      <span>{counter}</span>
    </>
  );
};
