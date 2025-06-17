import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

export type Image = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
};

type ResponseType = {
  results: Image[];
}

function App() {
  const accessKey = import.meta.env.VITE_ACCESS_KEY as string;
  const [images, setImages] = useState<Image[]>([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loader, setLoader] = useState(false)
  const [page, setPage] = useState(1);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState<Image | null>(null);

  const searchImages = (topic : string) => {
    setQuery(topic)
    setPage(1)
  }

  const loadMorePages = (nextPage: number) => {
    setPage(nextPage)
  }

  const openModal = (image: Image): void => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage(null);
  }

  useEffect(() => {
    const getPhotos = async () => {
      if (!query) return;
      try {
        setErrorMessage(false);
        setLoader(true)
        const response = await axios.get<ResponseType>(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&page=${page}&per_page=15`);
        setImages(prevImages => page === 1 ? response.data.results : [...prevImages, ...response.data.results]);
      } catch (error) {
        console.error(error)
        setErrorMessage(true);
      } finally {
        setLoader(false);
        setLoadMoreBtn(true);
      }
    }
    getPhotos();
  }, [query, page, accessKey] );

  return (
    <div>
      <SearchBar onSubmit={searchImages}></SearchBar>
      {loader && <Loader />}
      {errorMessage && <ErrorMessage />}
      <ImageGallery images={images} onImageClick={openModal}></ImageGallery>
      {loadMoreBtn && !errorMessage && <LoadMoreBtn page={page} onLoad={loadMorePages}></LoadMoreBtn>}
      <ImageModal onOpen={modalIsOpen} close={closeModal} image={modalImage} />
    </div>
  )
}

export default App
