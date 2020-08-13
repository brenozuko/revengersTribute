import React from 'react';
import ButtonRevenger from '../ButtonRevenger';
import { Wrapper, HeaderStyle } from './styles';
import LogoRevenger from '../LogoRevenger';

function HeaderOpen() {
  return (
    <HeaderStyle>
      <Wrapper>
        <LogoRevenger />
        <ButtonRevenger as="a" href="/video/new">
          Nova Memória
        </ButtonRevenger>
      </Wrapper>
    </HeaderStyle>
  );
}

export default HeaderOpen;
