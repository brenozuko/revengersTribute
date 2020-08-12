import styled from 'styled-components';
import ButtonRevenger from '../ButtonRevenger';
import LogoRevenger from '../LogoRevenger';
import container from '../../tools/container';

export const HeaderRevenger = styled.header`
  padding: 20rem 35rem;
  background-color: var(--color-black-dark);
  border-bottom: 2px solid var(--color-primary-medium);

  @media (max-width: 800px) {
    padding: 15rem 16rem;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${container};

  @media (max-width: 800px) {
    justify-content: center;

    & > ${LogoRevenger} {
      height: 35px;
    }

    & > ${ButtonRevenger} {
      display: flex;
      background-color: var(--color-primary-button);
      border-radius: 0;
      position: fixed;
      justify-content: center;
      border: 0;
      bottom: 0;
      width: 100vw;
      left: 0;
    }
  }
`;
