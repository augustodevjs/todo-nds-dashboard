import { useContext } from 'react';
import { OpenModalContext } from '../contexts';

export const useModal = () => {
  const context = useContext(OpenModalContext);
  return context;
};
