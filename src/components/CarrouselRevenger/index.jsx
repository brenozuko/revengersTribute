import React from 'react';
import PropTypes from 'prop-types';
import ThumbRevenger from '../ThumbRevenger';

function CarrouselRevenger({ videos }) {
  const { src, alt, title, avatar, channelName, timer, link } = videos[0];
  return (
    <ThumbRevenger
      src={src}
      alt={alt}
      title={title}
      avatar={avatar}
      channelName={channelName}
      timer={timer}
      link={link}
    />
  );
}

const typeVideo = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  timer: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

CarrouselRevenger.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(typeVideo)).isRequired,
};

export default CarrouselRevenger;
