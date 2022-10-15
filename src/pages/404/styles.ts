import styled from 'styled-components';

export const Container = styled.section`
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ffffff;

  @media (max-width: 720px) {
    padding: 0 2rem;
    font-size: 1.2rem;
  }
  h1 {
    @media (max-width: 720px) {
      font-size: 1.1rem;
    }
  }
`;
