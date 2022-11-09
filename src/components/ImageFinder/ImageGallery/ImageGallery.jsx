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

// return <ImageGalleryItem picture={pictures} />;

//   <ul>
//     {pictures.map(({ id, webformatURL, largeImageURL }) => {
//       return (
//         <ImageGalleryItem
//           key={id}
//           previewURL={webformatURL}
//           modalURL={largeImageURL}
//         />
//       );
//     })}
//   </ul>
// );

// function ImageGallery({ pictures }) {
//   return (
//     <ul>
//       {pictures.map(picture => {
//         return (
//           <ImageGalleryItem
//             key={picture.id}
//             previewURL={picture.webformatURL}
//             modalURL={picture.largeImageURL}
//           />
//         );
//       })}
//     </ul>
//   );
// }
