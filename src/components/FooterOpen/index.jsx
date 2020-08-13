import React from 'react';
import FooterStyle from './styles';
import LogoRevenger from '../LogoRevenger';
import Highlight from '../Highlight';
import LinkBreno from '../LinkBreno';

function FooterOpen() {
  return (
    <FooterStyle>
      <LogoRevenger />
      <p>
        Site tributo aos
        <Highlight> Revengers </Highlight>
        feito por
        <LinkBreno href="https://github.com/brenozuko" target="_blank">
          {' '}
          Breno Zukowski
        </LinkBreno>
      </p>
    </FooterStyle>
  );
}

export default FooterOpen;
