/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
import React from 'react';
import { Background, WrapperThumb, Thumb, Title } from './styles';
import AvatarRevenger from '../AvatarRevenger';

function ThumbRevenger({ src, alt, avatar, channelNAme, title }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarRevenger photo={avatar} channelName={channelNAme} />
        <Title>{title}</Title>
      </WrapperThumb>
    </Background>
  );
}

export default ThumbRevenger;
