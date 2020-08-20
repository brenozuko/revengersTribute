/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */

import React from 'react';
import { WrapperAvatar, Avatar, Channel } from './styles';

function AvatarRevenger({ photo, channelName }) {
  return (
    <WrapperAvatar>
      <Avatar src={photo} alt={channelName} />
      <Channel>{channelName}</Channel>
    </WrapperAvatar>
  );
}

export default AvatarRevenger;
