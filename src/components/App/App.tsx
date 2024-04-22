import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import './App.css';
import fetchImages from '../images-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

export interface Image {
  id: string;
  title: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [clickedImage, setClickedImage] = useState<Image | null>(null);
  const [showImageModal, setShowImageModal] = useState<boolean>(false);

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getImages() {
      try {
        setLoading(true);
        setError(false);
        const data: Image[] = await fetchImages(query, page);

        if (data.length === 0) {
          toast.error('Nothing found on this request');
        }

        setImages(prevImages => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  const handleQuery = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openImageModal = (image: Image) => {
    setClickedImage(image);
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleQuery} />
      <div className="page-content">
        {error && <ErrorMessage />}
        {images.length > 0 && (
          <ImageGallery items={images} openImageModal={openImageModal} />
        )}
        {loading && <Loader />}
        {images.length > 0 && !loading && (
          <LoadMoreButton onClick={handleLoadMore} />
        )}
        {clickedImage && (
          <ImageModal
            isOpen={showImageModal}
            onClose={closeImageModal}
            image={clickedImage}
          />
        )}
      </div>
    </div>
  );
};

export default App;
