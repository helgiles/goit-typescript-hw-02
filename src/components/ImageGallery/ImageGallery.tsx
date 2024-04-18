import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ items, openImageModal }) {
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
}
