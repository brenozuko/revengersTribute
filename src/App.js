import React from 'react';
import Logo from './components/LogoRevenger'
import {HeaderRevenger,Wrapper} from './components/HeaderRevengers'
import ButtonRevenger from './components/ButtonRevenger'
import FooterRevenger from './components/FooterRevenger'
import LinkBreno from './components/LinkBreno'
import Highlight from './components/Highlight'
import {BannerRevenger, Text} from './components/BannerRevenger'
import TagRevenger from './components/TagRevenger'
import TitleRevenger from './components/TitleRevenger'
import DescriptionRevenger from './components/DescriptionRevenger'
import ThumbRevenger from './components/ThumbRevenger'
import thumb from './assets/img/revenger-thumb.jpg'

function App() {
  return (
    <>
   <HeaderRevenger>
     <Wrapper>

   <Logo />
   <ButtonRevenger>Nova Memória</ButtonRevenger>
     </Wrapper>
 
   </HeaderRevenger>

    <BannerRevenger>
      <Text>
      <TagRevenger>Execute.Me( )</TagRevenger>
      <TitleRevenger>Equipe seu GEAR e seja bem-vindo, guy!</TitleRevenger>
      <DescriptionRevenger>Numa terra erma e distante, havia uma party peculiar. Este tributo é dedicado a contar a história de nossos queridos e anônimos aventureiros.  </DescriptionRevenger>
      </Text>

      <ThumbRevenger src = {thumb} alt = "Primeira arte oficial" />
     
      </BannerRevenger>

   <FooterRevenger>
     <Logo/>
     <p>Site tributo aos <Highlight>Revengers</Highlight> feito por <LinkBreno href = "https://github.com/brenozuko" target = "_blank">Breno Zukowski</LinkBreno></p>
     </FooterRevenger> 
   </>
  );
}

export default App;
