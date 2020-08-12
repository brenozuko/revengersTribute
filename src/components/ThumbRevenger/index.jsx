/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
import React from 'react';
import { WrapperThumb, Thumb, Avatar } from './styles';

function ThumbRevenger({ src, alt, avatar, nameAlt }) {
  return (
    <WrapperThumb>
      <Thumb src={src} alt={alt} />
      <Avatar src={avatar} alt={nameAlt} />
    </WrapperThumb>
  );
}

export default ThumbRevenger;
