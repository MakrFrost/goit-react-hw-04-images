import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

function Modal({ modalClick, largeImageURL }) {
  const onKeyDown = event => {
    if (event.code === 'Escape') {
      modalClick();
    }
  };
  const onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      modalClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  return createPortal(
    <div className="overlay" onClick={onOverlayClick}>
      <div className="modal">
        <img src={largeImageURL} alt="img" />
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
