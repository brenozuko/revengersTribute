/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
import React from 'react';
import { Background, WrapperThumb, Thumb, Avatar } from './styles';

function ThumbRevenger({ src, alt, avatar, nameAlt }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <Avatar src={avatar} alt={nameAlt} />
      </WrapperThumb>
    </Background>
  );
}

export default ThumbRevenger;
