import styled from "styled-components";

export const ModalFeedContainer = styled.div`
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

  @media (max-width: 470px) {
    height: 105vh;
  }

  @media (max-width: 425px) {
    height: 110vh;
  }

  @media (max-width: 390px) {
    height: 115vh;
  }

  @media (max-width: 360px) {
    height: 120vh;
  }

  @media (max-width: 333px) {
    height: 125vh;
  }

  & > div {
    position: relative;
    max-width: 864px;
    width: 90%;
    height: 600px;
    margin: 0 auto;
    padding: 30px 0;
    background-color: #fff;
    border-radius: 8px;
    display: flex;

    @media (max-width: 700px) {
      flex-direction: column;
      padding: 30px 16px;
    }

    @media (max-height: 690px) {
      max-width: 768px;
      height: 500px;
    }

    & > img {
      width: 40px;
      position: absolute;
      top: 1.3rem;
      right: 1.3rem;

      cursor: pointer;
    }
  }
`;

export const DivPersonalInfo = styled.div`
  width: 25%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  margin-bottom: 2rem;

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    grid-template-rows: 33% 33% 33%;

    gap: 0.7rem;

    width: 97%;
    height: 35%;
  }
`;

export const FigureModal = styled.figure`
  width: 100px;
  height: 100px;
  img {
    width: 110px;
  }

  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 5;

    grid-row-start: 1;
    grid-row-end: 3;

    width: unset;
    height: unset;
  }
`;

export const DivInfoEmail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  p {
    font-size: 16px;
    font-weight: 400;

    @media (max-width: 700px) {
      font-size: 14px;
    }
  }

  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 3;

    grid-row-start: 3;
    grid-row-end: 4;

    align-items: flex-start;

    width: unset;
  }
`;

export const DivLinks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  align-self: start;
  a {
    font-size: 20px;
    color: #657786;

    @media (max-width: 700px) {
      font-size: 18px;
    }
  }

  @media (max-width: 700px) {
    grid-column-start: 3;
    grid-column-end: 5;

    grid-row-start: 2;
    grid-row-end: 4;

    gap: 0.4rem;

    justify-content: flex-end;

    height: 110px;
    width: unset;
  }
`;

export const DivInfo = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 700px) {
      gap: 0.4rem;
    }
  }

  @media (max-width: 700px) {
    width: unset;
    height: 60%;
  }
`;

export const DeveloperName = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 100%;
  color: #14171a;

  @media (max-width: 700px) {
    font-size: 28px;
  }
`;

export const Developersvacancy = styled.h2`
  color: #657786;
  font-size: 20px;
  font-weight: 500;
  font-family: "Roboto";

  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

export const DivBio = styled.div`
  width: 100%;
  height: 660px;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  color: #14171a;
  font-size: 20px;
  font-family: "Roboto";

  p {
    font-weight: 400;
    font-size: 18px;
    width: 100%;
    height: 200px;
    word-break: break-all;

    @media (max-width: 700px) {
      font-size: 16px;
    }
  }
`;

export const Techs = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  gap: 5px;
  justify-self: flex-end;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    min-height: 20%;
  }

  div {
    position: relative;

    @media (max-width: 700px) {
      width: 11px;
      height: 11px;
    }

    &:hover {
      img {
        transition: 0.3s;
        transform: scale(1.1);
      }

      span {
        opacity: 1;
        top: -35px;
      }
    }

    img {
      width: 70px;
      min-width: 70px;
      min-height: 70px;
      aspect-ratio: 1/1;

      @media (max-width: 700px) {
        min-width: 45px;
        min-height: 45px;
      }
    }
  }
`;
