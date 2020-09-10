import React from 'react';
import PropTypes from 'prop-types';
import ThumbRevenger from '../ThumbRevenger';
import CarouselStyle from './styles';

function CarrouselRevenger({ videos }) {
  return (
    <CarouselStyle>
      {videos.map(({ src, alt, title, avatar, channelName, timer, link }) => (
        <ThumbRevenger
          src={src}
          alt={alt}
          title={title}
          avatar={avatar}
          channelName={channelName}
          timer={timer}
          link={link}
        />
      ))}
    </CarouselStyle>
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
