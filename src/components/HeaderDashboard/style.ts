import styled from "styled-components";

export const HeaderContainer = styled.div`
  border-bottom: 1px solid #1da1f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f8fa;

  @media screen and (max-width: 750px) {
    display: none;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  header {
    width: 100%;
    display: flex;
    height: 100px;
    justify-content: space-around;
    align-items: center;

    & img {
      height: 60%;
      cursor: pointer;
    }

    & nav ul {
      display: flex;
      gap: 34px;
    }

    & li {
      button {
        font-family: var(--font-family);
        font-size: 18px;

        color: var(--color-primary);
      }

      .spanBorder {
        display: block;
        width: 0%;
        height: 2px;
        background: var(--color-primary);

        transition: 0.4s;
      }

      &:hover {
        filter: brightness(0.8);
      }

      &:hover .spanBorder {
        width: 100%;
        transition: 0.4s;
      }
    }
  }
  & ul {
    display: flex;
    gap: 20px;

    img {
      cursor: pointer;
      width: 30px;
      aspect-ratio: 1/1;
    }
  }
`;
