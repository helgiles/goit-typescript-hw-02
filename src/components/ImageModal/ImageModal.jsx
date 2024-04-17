import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({ image, isOpen, onClose }) {
  return (
    <Modal
      className={css.overlay}
      isOpen={isOpen}
      onClick={event => event.stopPropagation()}
      onRequestClose={onClose}
    >
      <div className={css.content} >
        {image && (
          <img
            src={image.urls.regular}
            alt="Large image"
            className={css.image}
          />
        )}
      </div>
    </Modal>
  );
}
