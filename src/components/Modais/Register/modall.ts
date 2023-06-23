import styled, { keyframes } from "styled-components";
import devTechs from "../../../mockList/devTechs.json";
import { iProgressProps } from "../../../interface";

interface iModalContainerProps {
  progress: iProgressProps;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const ModalContainer = styled.div<iModalContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10000;
  background: rgba(5, 2, 6, 0.8);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  > div {
    position: absolute;
    max-width: 864px;
    width: 100%;
    height: 623px;
    margin: 0 auto;
    padding: 30px 0;
    background-color: #fff;
    border-radius: 8px;

    @media (max-height: 690px) {
      max-width: 768px;
      height: 500px;

      .FormContainer h2 {
        margin-bottom: 0;
      }
    }

    .back {
      display: ${({ progress }) => (progress.phase === 5 ? "none" : "block")};
      position: absolute;
      right: 20px;
      background-color: transparent;
      color: var(--color-primary);
    }

    .progressBarContainer {
      max-width: 400px;
      width: 100%;
      height: 10px;
      margin: 0 auto;
      display: flex;
      flex-flow: row nowrap;
      gap: 2px;

      div {
        width: 98.5px;
        height: 10px;
      }

      .completed {
        background-color: var(--color-success);
      }

      .onProgress {
        background-color: var(--color-primary);
      }

      .notCompleted {
        background-color: #d9d9d9;
      }

      .error {
        background-color: var(--color-error);
      }
    }

    form {
      h2 {
        margin-bottom: 39px;
        font-weight: 500;
        font-size: 30px;

        @media (max-height: 690px) {
          margin: 0;
        }
      }

      button:first-of-type {
        display: inline-flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        max-width: 331px;
        height: 48px;

        background: #1da1f2;
        color: #fefefe;
        border-radius: 8px;
        border: none;

        padding: 14px 100px 15px;

        font-family: var(--font-family);
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;

        text-decoration: none;
        transition: 0.4s;
        z-index: 1000;

        &:hover {
          cursor: pointer;
          filter: brightness(1.2);
        }
      }

      button:last-of-type {
        background-color: transparent;

        font-family: var(--font-family);
        font-style: normal;
        font-size: 16px;
        line-height: 23px;

        padding: 14px 116px 15px;
      }
    }

    form.progress-2,
    form.progress-3 {
      max-width: 400px;
      width: 100%;
      margin: 39px auto 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      gap: 28px;

      @media (max-height: 690px) {
        overflow-y: scroll;
        max-height: 385px;
      }

      .controls {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        gap: 21px;

        .working {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          gap: 10px;

          label {
            font-size: 20px;
          }
        }

        button:last-of-type {
          position: relative;

          input {
            cursor: pointer;
            position: absolute;
            width: 100%;
            height: 22px;
            left: 0;
            opacity: 0;
          }
        }
      }
    }

    form.progress-4 {
      max-width: 400px;
      width: 100%;
      max-height: 468px;
      height: 100%;
      margin: 39px auto 0;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      gap: 28px;

      h2 {
        margin-bottom: 0;
      }

      @media (max-height: 690px) {
        max-height: 385px;
        overflow-y: scroll;
        justify-content: start;
      }

      .techslist {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        row-gap: 1rem;
        column-gap: 3rem;

        .container {
          display: block;
          width: 70px;
          height: 60px;
          position: relative;
          padding-left: 35px;
          margin-bottom: 12px;
          cursor: pointer;
          font-size: 22px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .container input {
          width: 70px;
          height: 70px;
          left: 0;
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }

        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 70px;
          width: 70px;
          filter: grayscale(1);

          &:active {
            scale: 0.95;
          }
        }

        .container:hover input ~ .checkmark {
          filter: grayscale(0.5);
        }

        .container input:checked ~ .checkmark {
          filter: grayscale(0);
        }

        .tech-angular {
          background: transparent url(${devTechs[0].dir}) no-repeat center;
          background-size: contain;
        }

        .tech-css {
          background: transparent url(${devTechs[1].dir}) no-repeat center;
          background-size: contain;
        }

        .tech-html {
          background: transparent url(${devTechs[2].dir}) no-repeat center;
          background-size: contain;
        }

        .tech-js {
          background: transparent url(${devTechs[3].dir}) no-repeat center;
          background-size: contain;
        }

        .tech-react {
          background: transparent url(${devTechs[4].dir}) no-repeat center;
          background-size: contain;
        }

        .tech-vuejs {
          background: transparent url(${devTechs[5].dir}) no-repeat center;
          background-size: contain;
        }

        .tech-ts {
          background: transparent url(${devTechs[6].dir}) no-repeat center;
          background-size: contain;
        }
        .tech-php {
          background: transparent url(${devTechs[7].dir}) no-repeat center;
          background-size: contain;
        }
        .tech-c {
          background: transparent url(${devTechs[8].dir}) no-repeat center;
          background-size: contain;
        }
        .tech-sass {
          background: transparent url(${devTechs[9].dir}) no-repeat center;
          background-size: contain;
        }
        .tech-node {
          background: transparent url(${devTechs[10].dir}) no-repeat center;
          background-size: contain;
        }
      }

      button:last-of-type {
        background: #1da1f2;
      }
    }

    .RegisterCompleted {
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      gap: 30px;

      form {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        gap: 20px;

        button:last-of-type {
          background-color: #1da1f2;
          padding: 14px 90px 15px;
          align-items: center;
          width: 100%;
          max-width: 331px;
          height: 48px;
          background: #1da1f2;
          color: #fefefe;
          border-radius: 8px;
          border: none;
          padding: 14px 116px 15px;
          font-family: var(--font-family);
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 23px;
          -webkit-text-decoration: none;
          text-decoration: none;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          z-index: 1000;
        }
      }

      .loading svg {
        animation: ${rotate} 2s linear infinite;
      }
    }
  }
`;

export default ModalContainer;
