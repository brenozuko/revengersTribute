import styled from 'styled-components';

export const Avatar = styled.img`
  position: absolute;
  opacity: 0;
  height: 60rem;
  top: var(--space);
  left: var(--space);
  transform: translateX(-110%);
  transition: transform linear 300ms, opacity 100ms linear;
`;

export const Thumb = styled.img`
  width: 100%;
  height: 100%;
`;

export const WrapperThumb = styled.figure`
  max-width: 99%;
  position: relative;
  border-radius: 4px;
  border: var(--border) solid var(--color-primary-medium);
  width: 1000px;
  height: 320px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 80ms linear, opacity 300ms linear;
  background-color: var(--color-primary-medium);
  &:hover {
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

export const Background = styled.div`
  --space: 12rem;
  --border: 4rem;
  --move: calc(var(--space) * -1);
  position: relative;
  display: inline-block;
  max-width: 50%;
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
      transform: rotate(-45deg) scale(1);
    }

    & > ${WrapperThumb} {
      transform: translate(var(--move), var(--move));
      & > ${Avatar} {
        transform: translateX(0);
        opacity: 1;
        transition: transform linear 100ms, opacity 500ms linear;
      }
    }
  }
`;
