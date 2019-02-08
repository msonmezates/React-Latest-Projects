import React from 'react';
import PropTypes from 'prop-types';

const ImageList = (props) => {
  const images = props.images.map(({ urls, id, description }) => {
    return <img src={urls.regular} alt={description} key={id} />
  });
  return (
    <div>
      {images}
    </div>
  );
};

ImageList.propTypes = {
  images: PropTypes.array
}

export default ImageList;

