import styled from 'styled-components';

export const Container = styled.header`
  background-color: #2d2d2d;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100vw;
  height: 6.25rem;
  z-index: 2;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;

  @media (max-width: 912px) {
    padding: 0 3rem;
  }

  @media (max-width: 720px) {
    padding: 0 2rem;
  }
`;

export const Info = styled.div`
  a {
    display: flex;
    font-size: 2.25rem;

    @media (max-width: 720px) {
      font-size: 1.2rem;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  font-size: 2rem;

  @media (max-width: 720px) {
    font-size: 1rem;
  }

  a:nth-child(2) {
    margin-left: 3rem;
  }
`;
