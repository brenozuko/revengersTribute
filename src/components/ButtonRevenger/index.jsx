import styled from 'styled-components';

const ButtonRevenger = styled.button`
  padding: 14px 35px;
  background-color: var(--color-black-dark);
  color: var(--color-gray-light);
  border-bottom: 4px solid var(--color-gray-light);
  border: 1px solid var(--color-gray-light);
  border-radius: 4px;
  font-size: 15rem;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 150ms linear,
    transform 150ms cubic-bezier(0, 1.87, 0.37, 1.64);

  &:hover {
    background-color: var(--color-primary-medium);
    transform: scale(1.1);
  }

  &:active {
    transition: background-color 200ms linear, transform 100ms linear;
    transform: scale(0.95);
  }
`;

export default ButtonRevenger;
