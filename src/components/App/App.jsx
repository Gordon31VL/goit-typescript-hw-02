import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

function App() {
  const accessKey = import.meta.env.VITE_ACCESS_KEY;
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loader, setLoader] = useState(false)
  const [page, setPage] = useState(1);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const searchImages = (topic) => {
    setQuery(topic)
    setPage(1)
  }

  const loadMorePages = (nextPage) => {
    setPage(nextPage)
  }

  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  }

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
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&page=${page}&per_page=15`);
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
