import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getPhoto } from 'api/api';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import MyModal from './Modal/MyModal';
import Button from './Button/Button';

class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    isLoading: false,
    error: null,
    total: 0,
    largeImageURL: '',
    tags: '',
    showModal: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages(query, page);
    }
  }

  fetchImages = async (query, page) => {
    this.setState({ isLoading: true });
    try {
      const { hits, totalHits } = await getPhoto(query, page);
      if (hits.length === 0) {
        return alert('Not find');
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        total: totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onHandleSubmit = value => {
    if (value === this.state.query) {
      return alert('sorry, this value is entered');
    }
    this.setState({ query: value, page: 1, images: [] });
  };

  onOpenModal = (largeImageURL, tags) => {
    console.log(largeImageURL, tags);
    // this.setState({showModal: true, largeImageURL: largeImageURL, tags: tags})
    this.setState({ showModal: true, largeImageURL, tags });
  };

  onCloseModal = () => {
    this.setState({ showModal: false, largeImageURL: '', tags: '' });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    // window.scroll({
    //   bottom: 100,
    //   behavior: 'smooth',
    // });
  };

  render() {
    const { images, isLoading, error, total, largeImageURL, tags, showModal } =
      this.state;
    const allPage = total / images.length;
    // loadMore: this.state.page < Math.ceil(totalHits / 12 )
    return (
      <>
        <Searchbar onSubmit={this.onHandleSubmit} />
        {isLoading && <Loader />}
        {error && <p>Message</p>}
        {images.length > 0 && (
          <ImageGallery images={images} onOpenModal={this.onOpenModal} />
        )}
        {allPage > 1 && !isLoading && images.length > 0 && (
          <Button onClick={this.onLoadMore} />
        )}

        <MyModal
          largeImageURL={largeImageURL}
          tags={tags}
          isOpenModal={showModal}
          isCloseModal={this.onCloseModal}
        />
      </>
    );
  }
}

export default App;
