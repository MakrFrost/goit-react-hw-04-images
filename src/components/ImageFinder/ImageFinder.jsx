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
  console.log(loadMore);
  console.log(totalPage);

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
      {page !== totalPage && <Button loadMore={onLoadMore} />}
      {console.log(totalPage)}
    </section>
  );
}

// class ImageFinder extends Component {
//   state = {
//     toFind: '',
//     page: 1,
//     findPictures: [],
//     loading: false,
//     error: null,
//     modalShow: false,
//     loadMore: false,
//     largeImageURL: null,
//     // status: 'idle',
//     totalPage: 1,
//   };

//   async componentDidUpdate(_, prevState) {
//     const prevPage = prevState.page;
//     const nextPage = this.state.page;
//     const prevFind = prevState.toFind;
//     const nextFind = this.state.toFind;

//     if (prevFind !== nextFind || prevPage !== nextPage) {
//       this.setState({ loading: true });

//       const responce = await FetchPixabay(nextFind, nextPage)
//         .catch(error => this.setState({ error }))
//         .finally(() => this.setState({ loading: false }));

//       const data = responce.data;
//       console.log(data);

//       const totalPage = Math.ceil(data.totalHits / 12);
//       this.setState(prevState => ({
//         findPictures: [...prevState.findPictures, ...data.hits],
//         totalPage: totalPage,
//       }));

//       if (data.totalHits === 0) {
//         this.setState({ loadMore: false });
//         this.setState({});
//         toast.error('Error, not found images!');
//       }
//     }
//   }

//   onFormSubmit = value => {
//     this.setState({
//       toFind: value,
//       page: 1,
//       findPictures: [],
//       totalPage: 1,
//     });
//   };
//   onLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };
//   modalImageClick = url => {
//     this.setState(({ modalShow }) => ({ modalShow: !modalShow }));
//     this.setState(() => ({ largeImageURL: url }));
//   };

//   render() {
//     const {
//       largeImageURL,
//       // loadMore,
//       modalShow,
//       error,
//       toFind,
//       loading,
//       findPictures,
//       totalPage,
//       page,
//     } = this.state;

//     return (
//       <section className="app">
//         {error && toast.error('Error, try again later!')}
//         <Searchbar onSubmit={this.onFormSubmit} />
//         {loading && (
//           <div className="start-loader">
//             <Loader />
//             Searching...
//           </div>
//         )}
//         {!toFind && (
//           <h2 className="start-message">
//             Enter something to searching images...
//           </h2>
//         )}

//         {findPictures && (
//           <ImageGallery
//             pictures={findPictures}
//             modalClick={this.modalImageClick}
//           />
//         )}

//         {modalShow && (
//           <Modal
//             modalClick={this.modalImageClick}
//             largeImageURL={largeImageURL}
//           />
//         )}

//         {page !== totalPage && <Button loadMore={this.onLoadMore} />}
//       </section>
//     );
//   }
// }

export default ImageFinder;
