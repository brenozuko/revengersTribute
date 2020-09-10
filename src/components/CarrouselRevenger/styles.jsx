import styled from 'styled-components';
import { WrapperThumb, Background } from '../ThumbRevenger/styles';

const CarouselStyle = styled.div`
  display: flex;
  align-self: flex-start;
  width: 100%;
  padding-top: 20rem;
  padding-bottom: 20rem;
  overflow-x: hidden;

  & > ${Background} {
    margin-right: 20rem;
  }

  & ${WrapperThumb} {
    width: 380px;
  }
`;

export default CarouselStyle;
