import styled from 'styled-components';

const ButtonRevenger = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 14px 35px;
  background-color: var(--color-black-dark);
  color: var(--color-gray-light);
  border-bottom: 4px solid var(--color-gray-light);
  border: 1px solid var(--color-gray-light);
  border-radius: 4px;
  font-size: 15rem;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;


  &::before {
    content: '';
    position: absolute;
    opacity: 1;
    width: 100%;
    height: 100%;
    background-color: var(--color-primary-medium);
    border-radius: 4px;
    transform: translateX(120%) skew(-30deg);
    transition: transform 200ms linear;
  }
  &::after {
    content: '${(props) => props.children}';
    position: absolute;
  }

  &:hover::before {
    transform: translateX(0) scaleX(1.5) skew(-30deg);
  }

  &:active {
    transition: background-color 200ms linear, transform 100ms linear;
    transform: scale(0.85);
  }
`;

export default ButtonRevenger;
