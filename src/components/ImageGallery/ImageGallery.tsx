import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

interface Image {
  id: string;
  title: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

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
