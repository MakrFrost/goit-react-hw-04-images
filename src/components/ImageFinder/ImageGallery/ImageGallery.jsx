import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ pictures, modalClick }) {
  return (
    <ul className="image-gallery">
      {pictures.map(picture => {
        return (
          <ImageGalleryItem
            key={picture.id}
            previewURL={picture.webformatURL}
            largeImageURL={picture.largeImageURL}
            modalClick={modalClick}
          />
        );
      })}
    </ul>
  );
}

export default ImageGallery;
