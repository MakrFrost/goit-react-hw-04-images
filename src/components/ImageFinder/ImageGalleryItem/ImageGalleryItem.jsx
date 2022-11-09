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

//  (
//         <li key={id} className="image-gallery-item">
//           <img
//             src={webformatURL}
//             className="image-gallery-item-image"
//             alt="img"
//           />
//         </li>
//       )

// return (
//   <ul className="image-gallery">
//     {picture.hits.map(({ id, webformatURL, largeImageURL }) => (
//       <li key={id} className="image-gallery-item">
//         <img
//           src={webformatURL}
//           className="image-gallery-item-image"
//           alt="img"
//         />
//       </li>
//     ))}
//   </ul>
// );

// <li key={key} className="image-gallery-item">
//   <img src={previewURL} alt="img" />
// </li>;
