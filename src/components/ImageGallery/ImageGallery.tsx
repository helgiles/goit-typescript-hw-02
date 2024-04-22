import css from './ImageGallery.module.css';
import { Image } from '../App/App';
import ImageCard from '../ImageCard/ImageCard';

interface ImageGalleryProps {
  items: Image[];
  openImageModal: (item: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  items,
  openImageModal,
}) => {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <li key={item.id}>
          <div>
            <ImageCard image={item} onClick={() => openImageModal(item)} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
