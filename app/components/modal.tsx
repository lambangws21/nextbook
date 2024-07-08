// components/Modal.tsx
import React from 'react';
import Modal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({ isOpen, onRequestClose, contentLabel, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className="Modal border-2 border-blue-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-300/70 p-5 rounded-lg shadow-md w-96 ml-10"
      overlayClassName="Overlay flex justify-center items-center ml-10 border p-5 rounded-lg shadow-md w-30 bg-slate-600/20"
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
