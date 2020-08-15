import styled from 'styled-components';

export const Avatar = styled.img`
  position: absolute;
  opacity: 0;
  height: 60rem;
  top: 10rem;
  left: 10rem;
  transform: translateX(-110%);
  transition: transform linear 300ms, opacity 100ms linear;
`;

export const Thumb = styled.img`
  width: 100%;
  height: 100%;
`;

export const WrapperThumb = styled.figure`
  --space: 10rem;
  max-width: 50%;
  position: relative;
  border-radius: 4px;
  border: 4rem solid var(--color-execute);
  width: 1000px;
  height: 320px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 100ms linear;

  @media (max-width: 800px) {
    display: none;
  }

  &:hover {
    --move: calc(var(--space) * -1);
    transform: translate(var(--move), var(--move));
    & > ${Avatar} {
      transform: translateX(0);
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
