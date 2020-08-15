import styled from 'styled-components';

const StartRevenger = styled.h2`
  font-family: 'Press Start 2P';
  padding: 18rem 15rem;
  display: inline-block;
  font-size: 45rem;
  color: #fff;
  animation: blink 1s linear infinite;
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default StartRevenger;
