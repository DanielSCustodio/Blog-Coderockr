export const ContainerLeft = styled.section`
  padding-top: 10rem;
  display: flex;
  flex-wrap: wrap;

  article:nth-child(5n + 1) {
    display: flex;
    width: 50%;

    img {
      width: 220px;
      height: 220px;
    }

    .content {
      background-color: #ffffff;
      height: 220px;
      width: 640px;

      h3 {
        font-size: 24px;
      }

      h2 {
        font-size: 36px;
      }
    }
  }

  article:nth-child(5n + 2) {
    background-color: red;
  }

  article:nth-child(5n + 3) {
    background-color: purple;
  }

  article:nth-child(5n + 4) {
    background-color: blue;
  }

  article:nth-child(5n + 5) {
    background-color: yellow;
  }
`;

export const Content = styled.section`
  background-color: yellow;
`;
