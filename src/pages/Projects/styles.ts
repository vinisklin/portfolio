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
`;

export const ReposContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const RepositoryBox = styled.a`
  width: 48%;
  height: min-content;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0.6rem;
  margin-bottom: 1.8rem;
  border: 1px solid #fff;
  border-radius: 5px;

  transition: color 2s;

  &:hover {
    color: #999;
    /* color: linear-gradient(90deg, #ff8a00, #e52e71); */
    /* border-color: linear-gradient(90deg, #ff8a00, #e52e71); */
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.4rem;
    max-height: 7.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div {
    margin-top: 0.8rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
