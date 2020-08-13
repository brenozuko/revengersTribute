import styled from 'styled-components';
import container from '../../tools/container';
import TagRevenger from '../TagRevenger';
import DescriptionRevenger from '../DescriptionRevenger';

const SectionRevenger = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20rem;
  padding-bottom: 20rem;
  ${container}

  & > ${TagRevenger} {
    margin-top: 40rem;
    margin-bottom: 40rem;
  }

  & > ${TagRevenger}:not(:first-child){
    align-self: flex-start;
  }

  & > ${DescriptionRevenger} {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default SectionRevenger;
