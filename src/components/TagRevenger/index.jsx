import styled, { css } from 'styled-components';

const TagRevenger = styled.h2`
  border-radius: 4rem;
  background-color: var(--color-primary-medium);
  color: #fff;
  padding: 18rem 15rem;
  display: inline-block;
  font-size: 45rem;

  ${({ small }) =>
    small &&
    css`
      font-size: 25rem;
      padding: 10rem 10rem;
    `}
`;
export default TagRevenger;
