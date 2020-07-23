import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    letter-spacing: 0.1rem;
    margin-bottom: 3rem;
  }

  h4 {
    margin-bottom: 6rem;
  }

  nav {
    margin-bottom: 3rem;

    display: flex;

    border: 1px solid #fff;
    border-radius: 5px;

    a {
      min-width: 12rem;
      height: 4.5rem;
      line-height: 2rem;

      padding: 1.4rem 1.25rem 1.4rem 1.45rem;

      font-size: 1.4rem;
      text-align: center;

      transition: background-color 0.2s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.15);
      }

      & + a {
        border-left: 1px solid #fff;
      }
    }
  }
`;

export const IconsContainer = styled.div`
  margin-bottom: 3rem;

  a {
    & + a {
      margin-left: 1.5rem;
    }

    svg {
      transition: transform 1.2s;

      padding: 0.5rem;
      border: 1px solid #fff;
      border-radius: 50%;

      &:hover {
        transform: rotate(360deg);
      }
    }
  }
`;
