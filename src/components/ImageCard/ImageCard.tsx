import css from './ImageCard.module.css';

interface Image {
  id: string;
  title: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={css.container} onClick={onClick}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
