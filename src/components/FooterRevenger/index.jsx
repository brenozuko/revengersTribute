import styled from 'styled-components';
import LogoRevenger from '../LogoRevenger';

const FooterRevenger = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16rem;
  background-color: var(--color-black-dark);
  color: var(--color-gray-light);
  font-size: 16rem;
  bottom: 0;

  padding: 20rem 0;
  border-top: 4px solid var(--color-primary-medium);

  @media (max-width: 800px) {
    display: none;
  }

  & > ${LogoRevenger} {
    margin-bottom: 10rem;
  }
`;

export default FooterRevenger;
