import styled from 'styled-components';
import TagRevenger from '../TagRevenger';
import DescriptionRevenger from '../DescriptionRevenger';

const SectionRevenger = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30rem 50rem;

  & > ${TagRevenger} {
    margin-top: 40rem;
    margin-bottom: 40rem;
  }

  & > ${TagRevenger}:not(:first-child) {
    align-self: flex-start;
  }

  & > ${DescriptionRevenger} {
    max-width: 820px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default SectionRevenger;
