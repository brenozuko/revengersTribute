import styled from 'styled-components';
import container from '../../tools/container';
import TagRevenger from '../TagRevenger';
import TitleRevenger from '../TitleRevenger/index';

export const BannerRevenger = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 70vh;
  height: 100vh;
  ${container}
`;

export const Text = styled.div`
  padding-top: 10rem;
  padding-right: 20rem;

  & > ${TagRevenger} {
    margin-bottom: 40rem;
  }

  & > ${TitleRevenger} {
    margin-bottom: 20rem;
  }
`;
