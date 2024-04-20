import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

interface Image {
  id: string;
  title: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface ImageModalProps {
  image: Image | null;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, isOpen, onClose }) => {
  return (
    <Modal
      overlayClassName={css.overlay}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
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

// export default function ImageModal({ image, isOpen, onClose }) {
//   return (
//     <Modal
//       className={css.overlay}
//       isOpen={isOpen}
//       onClick={event => event.stopPropagation()}
//       onRequestClose={onClose}
//     >
//       <div className={css.content} >
//         {image && (
//           <img
//             src={image.urls.regular}
//             alt="Large image"
//             className={css.image}
//           />
//         )}
//       </div>
//     </Modal>
//   );
// }
