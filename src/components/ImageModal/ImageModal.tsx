import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { Image } from '../App/App';

Modal.setAppElement('#root');

interface ImageModalProps {
  image: Image | null;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, isOpen, onClose }) => {
  return (
    <Modal className={css.overlay} isOpen={isOpen} onRequestClose={onClose}>
      <div className={css.content} onClick={onClose}>
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
};

export default ImageModal;
