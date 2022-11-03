import { createContext, useState } from 'react';
import { OpenModalContextProps, OpenModalProviderProps } from './types';

export const OpenModalContext = createContext<OpenModalContextProps>(
  {} as OpenModalContextProps,
);

export const OpenModalProvider: React.FC<OpenModalProviderProps> = ({
  children,
}) => {
  const [newModalOpen, setNewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const toogleModal = () => {
    setNewModalOpen(!newModalOpen);
  };

  const toogleEditModal = () => {
    setEditModalOpen(!editModalOpen);
  };

  return (
    <OpenModalContext.Provider
      value={{ editModalOpen, newModalOpen, toogleEditModal, toogleModal }}
    >
      {children}
    </OpenModalContext.Provider>
  );
};
