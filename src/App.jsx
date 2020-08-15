import React from 'react';
import { BannerRevenger, Text } from './components/BannerRevenger';
import TagRevenger from './components/TagRevenger';
import TitleRevenger from './components/TitleRevenger';
import DescriptionRevenger from './components/DescriptionRevenger';
import ThumbRevenger from './components/ThumbRevenger';
import thumb from './assets/img/revenger-thumb.jpg';
import lb from './assets/img/little-busters.png';
import HeaderOpen from './components/HeaderOpen';
import FooterOpen from './components/FooterOpen';
import SectionRevenger from './components/SectionRevenger';
import StartRevenger from './components/StartRevenger';

const videos = [
  {
    src: { thumb },
    alt: 'Thumb revenger',
    title: 'Vídeo topster',
    avatar: { lb },
    channelName: 'Teste',
    timer: '00:02:00',
    link: 'https://www.youtube.com/watch?v=_1FC8XCmwkY',
  },
  {
    src: { thumb },
    alt: 'Thumb revenger',
    title: 'Vídeo topster',
    avatar: { lb },
    channelName: 'Teste',
    timer: '00:02:00',
    link: 'https://www.youtube.com/watch?v=_1FC8XCmwkY',
  },
  {
    src: { thumb },
    alt: 'Thumb revenger',
    title: 'Vídeo topster',
    avatar: { lb },
    channelName: 'Teste',
    timer: '00:02:00',
    link: 'https://www.youtube.com/watch?v=_1FC8XCmwkY',
  },
  {
    src: { thumb },
    alt: 'Thumb revenger',
    title: 'Vídeo topster',
    avatar: { lb },
    channelName: 'Teste',
    timer: '00:02:00',
    link: 'https://www.youtube.com/watch?v=_1FC8XCmwkY',
  },
  {
    src: { thumb },
    alt: 'Thumb revenger',
    title: 'Vídeo topster',
    avatar: { lb },
    channelName: 'Teste',
    timer: '00:02:00',
    link: 'https://www.youtube.com/watch?v=_1FC8XCmwkY',
  },
];

function App() {
  return (
    <>
      <HeaderOpen />

      <BannerRevenger>
        <Text>
          <TagRevenger>Execute.Me( )</TagRevenger>
          <TitleRevenger>Equipe seu JEAR e seja bem-vindo, guy! </TitleRevenger>
          <DescriptionRevenger>
            Numa terra erma e distante, havia uma party peculiar. Este tributo é
            dedicado a contar a história de nossos queridos e anônimos
            aventureiros.
          </DescriptionRevenger>
        </Text>

        <ThumbRevenger
          src={thumb}
          alt="Primeira arte oficial"
          avatar={lb}
          nameAlt="Quem entendeu, entendeu."
        />
      </BannerRevenger>

      <SectionRevenger>
        <StartRevenger as="a" href="https://matias.ma/nsfw/" target="_blank">
          PRESS START
        </StartRevenger>
        <TagRevenger small>SANIC.MP4</TagRevenger>
        {/* <CarrouselRevenger videso={videos} /> */}
      </SectionRevenger>
      <FooterOpen />
    </>
  );
}

export default App;
