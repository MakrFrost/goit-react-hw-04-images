function ImageGalleryItem({ id, previewURL, modalClick, largeImageURL }) {
  return (
    <li key={id} className="image-gallery-item">
      <img
        src={previewURL}
        className="image-gallery-item-image"
        alt="img"
        onClick={() => {
          modalClick(largeImageURL);
        }}
      />
    </li>
  );
}

export default ImageGalleryItem;
