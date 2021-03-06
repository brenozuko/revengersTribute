import styled from 'styled-components';
import { WrapperAvatar } from '../AvatarRevenger/styles';

export const Timer = styled.span`
  position: absolute;
  right: var(--space);
  bottom: var(--space);
  color: var(--color-gray-light);
  font-size: 15px;
  background-color: var(--color-black-medium);
  padding: 2rem 4rem;
  opacity: 0;
  transition: opacity 100ms linear;
`;
export const Title = styled.figcaption`
  position: absolute;
  font-size: 20rem;
  bottom: var(--space);
  left: var(--space);
  color: var(--color-gray-light);
  font-weight: 300;
  background-color: var(--color-black-medium);
  padding: 4rem 5rem;
  transform: translateY(-110%);
  opacity: 0;
  transition: transform linear 100ms, opacity 100ms linear;
`;

export const Thumb = styled.img`
  width: 100%;
  height: 100%;
  transition: filter 100ms linear;
  /* opacity: 0; */
`;

export const WrapperThumb = styled.figure`
  position: relative;
  border-radius: 4px;
  border: var(--border) solid var(--color-primary-medium);
  width: 540px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 80ms linear, opacity 300ms linear;

  & > ${WrapperAvatar} {
    transform: translateX(-110%);
    transition: transform linear 300ms, opacity 100ms linear;
    opacity: 0;
    position: absolute;
    top: var(--space);
    left: var(--space);
  }
`;

export const Background = styled.div`
  --space: 12rem;
  --border: 4rem;
  --move: calc(var(--space) * -1);
  position: relative;
  display: inline-block;
  background-color: var(--color-primary-medium);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: calc(var(--space) * 1.4);
    height: calc(var(--space) * 1.4);
    background-color: var(--color-primary-medium);
    transform-origin: right top;
    transition: transform 60ms linear;
  }

  &::before {
    right: 0;
    top: 0;
    transform: rotate(45deg) scale(0);
  }

  &::after {
    left: 0;
    bottom: 0;
    transform-origin: left bottom;
    transform: rotate(-45deg) scale(0);
    z-index: -1;
  }

  &:hover {
    &::before {
      transform: rotate(45deg) scale(1);
    }

    &::after {
      transform: rotate(-40deg) scale(1);
    }

    & > ${WrapperThumb} {
      transform: translate(var(--move), var(--move));

      & > ${Thumb} {
        filter: brightness(0.4);
      }

      & > ${WrapperAvatar} {
        transform: translateX(0);
        opacity: 1;
        transition: transform linear 100ms, opacity 500ms linear;
      }

      & > ${Title} {
        transform: translateY(0);
        opacity: 1;
        transition: transform linear 100ms, opacity 100ms linear;
      }

      & > ${Timer} {
        opacity: 1;
        transition: opacity 100ms linear;
      }
    }
  }
`;

//comentário de teste