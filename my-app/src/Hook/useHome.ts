import { useAppDispatch, useAppSelector } from 'Hook';

const useHome = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.Home);
  return { state, dispatch };
};

export default useHome;
