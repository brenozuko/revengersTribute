/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
import React from 'react';
import { Background, WrapperThumb, Thumb } from './styles';
import AvatarRevenger from '../AvatarRevenger';

function ThumbRevenger({ src, alt, avatar, channelNAme }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarRevenger photo={avatar} channelName={channelNAme} />
      </WrapperThumb>
    </Background>
  );
}

export default ThumbRevenger;
