import { FC, memo, useEffect } from 'react';
import {
  CloseButton,
  ModalContainer,
  ModalHeader,
  Overlay,
} from './Modal.styles';
import { ModalProps } from './Modal.types';

const ModalComponent: FC<ModalProps> = ({ children, title, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <Overlay
      onClick={(evt) => {
        onClose();
      }}
    >
      <ModalContainer onClick={(evt) => evt.stopPropagation()}>
        <ModalHeader>
          <h3>{title}</h3>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        {children}
      </ModalContainer>
    </Overlay>
  );
};

export const Modal = memo(ModalComponent);
