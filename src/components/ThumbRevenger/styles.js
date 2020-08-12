import styled from 'styled-components';

export const Avatar = styled.img`
  position: absolute;
  height: 150px;
  bottom: 60rem;
  opacity: 0;
  transform: translateX(-220%);
  transition: transform linear 300ms, opacity 100ms linear;
`;

export const Thumb = styled.img`
  height: 100%;
`;

export const WrapperThumb = styled.figure`
  position: relative;
  border-radius: 4px;
  border: 4rem solid var(--color-execute);
  height: 300px;
  overflow: hidden;

  &:hover {
    & > ${Avatar} {
      transform: translateX(-110%);
      opacity: 1;
      transition: transform linear 100ms, opacity 500ms linear;
    }
    &::before {
      content: '';
      background-color: #000;
      display: inline-block;
      width: 100%;
      height: 100%;
      opacity: 0.8;
      transition: opacity 300ms linear;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
  }
`;
