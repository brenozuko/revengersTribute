import React from 'react';
import PropTypes from 'prop-types';

function CarrouselRevenger({ videos }) {
  return <ThumbRevenger {...videos[0]} />;
}

export default CarrouselRevenger;
