import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-8rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ContentBox = styled.div`
  max-width: 64rem;
  width: 90vw;
  position: relative;

  padding: 6rem 5rem 2.4rem;
  border-radius: 5px;

  background-color: rgba(0, 0, 0, 0.5);
  animation: ${appearFromLeft} 1s;

  & > a {
    position: absolute;
    top: 0;
    right: 0;

    width: 3rem;
    height: 3rem;

    margin: 1.2rem;

    &:hover {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  h2 {
    margin: 0 auto 3rem;

    border-bottom: 1px solid #fff;

    line-height: 5rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
  }

  p {
    margin-bottom: 3rem;

    text-align: justify;
  }
`;
