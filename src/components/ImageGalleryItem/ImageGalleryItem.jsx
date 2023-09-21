import React from 'react';

const ImageGalleryItem = ({
  largeImageURL,
  webformatURL,
  tags,
  onOpenModal,
}) => {
  return (
    <li
      className="gallery-item"
      onClick={() => onOpenModal(largeImageURL, tags)}
    >
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
