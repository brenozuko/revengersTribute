/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
import React from 'react';
import { Background, WrapperThumb, Thumb, Title, Timer } from './styles';
import AvatarRevenger from '../AvatarRevenger';

function ThumbRevenger({ src, alt, avatar, channelNAme, title, timer }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarRevenger photo={avatar} channelName={channelNAme} />
        <Title>{title}</Title>
        <Timer>{timer}</Timer>
      </WrapperThumb>
    </Background>
  );
}

export default ThumbRevenger;
