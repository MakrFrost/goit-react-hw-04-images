import { toast } from 'react-toastify';

import { useState, useEffect } from 'react';

//? Форма поиска
import Searchbar from './Searchbar/Searchbar';
//? Фетч функция
import FetchPixabay from './API/PixabayApi';
//? Колесо загрузки
import { Loader } from './Loader/Loader';
//? Галерея карточек
import ImageGallery from './ImageGallery/ImageGallery';
//? Модалка
import Modal from './Modal/Modal';
//? Кнопка загрузить ещё
import Button from './Button/Button';

function ImageFinder() {
  const [toFind, setToFind] = useState('');
  const [page, setPage] = useState(1);
  const [findPictures, setFindPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [totalPage, setTotalPage] = useState(1);
  const totalImages = findPictures.length;

  useEffect(() => {
    if (toFind.trim() === '') {
      return;
    }

    const loadAPI = async () => {
      setLoading(true);

      const responce = await FetchPixabay(toFind, page)
        .catch(error => setError(error))
        .finally(() => setLoading(false));

      const data = responce.data;
      console.log(data);

      const totalPage = Math.ceil(data.totalHits / 12);

      setFindPictures(prevState => [...prevState, ...data.hits]);
      setTotalPage(totalPage);
      console.log(totalPage);

      if (data.totalHits === 0) {
        setLoadMore(false);
        toast.error('Error, not found images!');
      }
    };

    loadAPI();
  }, [toFind, page]);

  const onFormSubmit = value => {
    setToFind(value);
    setPage(1);
    setFindPictures([]);
    setTotalPage(1);
  };
  const onLoadMore = () => {
    setPage(page + 1);
  };
  const modalImageClick = url => {
    setModalShow(!modalShow);
    setLargeImageURL(url);
  };

  return (
    <section className="app">
      {error && toast.error('Error, try again later!')}
      <Searchbar onSubmit={onFormSubmit} />
      {loading && (
        <div className="start-loader">
          <Loader />
          Searching...
        </div>
      )}
      {!toFind && (
        <h2 className="start-message">
          Enter something to searching images...
        </h2>
      )}
      {findPictures && (
        <ImageGallery pictures={findPictures} modalClick={modalImageClick} />
      )}
      {modalShow && (
        <Modal modalClick={modalImageClick} largeImageURL={largeImageURL} />
      )}
      {totalImages >= 12 && totalImages < totalPage && (
        <Button loadMore={onLoadMore} />
      )}
    </section>
  );
}

export default ImageFinder;
