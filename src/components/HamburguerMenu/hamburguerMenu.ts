import styled from "styled-components";
import list from "./list.png";

const MenuContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9;

  @media screen and (min-width: 750px) {
    display: none;
  }
  nav {
    width: 100%;
    padding: 17px 0;
    background-color: #f5f8fa;
    transition: all 0.5s;
    z-index: 1;
    border-bottom: #1da1f2 1px solid;
    img {
      cursor: pointer;
    }
    @media (max-width: 1200px) {
      border-bottom: 0;
    }

    .NavContainer {
      max-width: 1600px;
      margin: 0 auto;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 1800px) {
        padding: 0 100px;
      }

      @media (max-width: 1200px) {
        padding: 0;
        flex-direction: column;
        gap: 0;
      }

      .MenuContainer {
        display: flex;
        flex-direction: row;
        position: relative;
        z-index: 1;

        @media (max-width: 1200px) {
          width: 100%;
          display: flex;
          justify-content: space-around;
          gap: 50%;

          align-items: center;
          background-color: #f5f8fa;
          transition: all 0.3s;
        }

        img {
          width: 120px;
        }

        #MenuBtn {
          display: none;
          min-width: 26px;
          min-height: 26px;
          background-image: url(${list});
          background-size: contain;
          background-repeat: no-repeat;

          @media (max-width: 1200px) {
            display: block;
          }
        }
      }

      .ControlsContainer {
        width: fit-content;

        @media (max-width: 1200px) {
          width: 100%;
          position: relative;
          z-index: -1;
        }

        .Controls {
          display: flex;
          flex-flow: row nowrap;
          gap: 34px;
          background-color: #f5f8fa;
          transition: all 0.5s;
          z-index: -1;
          border-bottom: #1da1f2 2px solid;

          @media (max-width: 1200px) {
            gap: 4em;
            flex-direction: column;
            align-items: center;
            position: absolute;
            width: 100%;
            transform: translateY(-93%);
          }

          button {
            font-weight: 700;
            color: #1da1f2;
          }
        }

        .active {
          transform: translateY(0) !important;
          padding: 30px 0;
        }
      }
    }
    .ControlsDev {
      display: none;
      flex-flow: row nowrap;
      gap: 34px;
      background-color: #f5f8fa;
      transition: all 0.5s;
      z-index: -1;
      margin: -3.5rem 0 -2rem;

      @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;

        width: 100%;
        transform: translateY(-93%);
      }
      .devType {
        gap: 40px;
      }
      ul {
        display: flex;
        gap: 10px;
        img {
          width: 30px;
        }
        button {
          color: #000000;
        }
      }

      h5 {
        font-family: var(--font-family);
        font-weight: 500;
        color: #000000;
        text-align: inherit;
        width: 90%;
      }
    }

    .active {
      display: flex;
      transform: translateY(0) !important;
    }
  }
`;

export default MenuContainer;
