import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerFeed = styled.div`
  max-width: 1050px;
  width: 80%;
  margin: 0 auto;
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 750px) {
    margin-top: 7rem;
  }
`;

export const ContainerDeveloper = styled(motion.div)`
  width: 90%;
  margin: 10px auto;
  border: 2px solid #1da1f2;
  border-radius: 10px;
  display: flex;
  padding: 10px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DivDevelopersInfo = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 750px) {
    display: none;
  }

  p {
    word-break: break-word;
  }
`;

export const Figure = styled.figure`
  width: 100px;
  height: 100px;
`;

export const DivDevelopersName = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 0.94rem;

  @media (max-width: 750px) {
    width: 100%;
    gap: 0.5rem;
  }
`;

export const DeveloperName = styled.h1`
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 100%;
  color: #14171a;
`;
export const Developersvacancy = styled.p`
  color: #657786;
  font-size: 22px;
  font-family: var(--font-family);
`;

export const DivDevelopersLinks = styled.div`
  width: 70%;
  display: flex;
  gap: 10px;
  color: #657786;
  font-size: 18px;
  & a {
    text-decoration: none;
  }
`;

export const DivDevelopersTech = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 750px) {
    flex-direction: row;

    margin-top: 1rem;
    width: 100%;
  }
`;

export const Techs = styled.div`
  position: relative;
  display: flex;
  gap: 5px;

  width: 100%;
  height: 30%;

  @media (max-width: 750px) {
    max-width: 60%;
  }

  & div {
    width: 11px;
    height: 11px;

    @media (max-width: 1100px) {
      width: 10px;
      height: 10px;
    }

    @media (max-width: 1050px) {
      width: 9px;
      height: 9px;
    }

    @media (max-width: 1000px) {
      width: 8px;
      height: 8px;
    }

    @media (max-width: 900px) {
      width: 7px;
      height: 7px;
    }

    @media (max-width: 850px) {
      width: 6px;
      height: 6px;
    }

    @media (max-width: 800px) {
      width: 5px;
      height: 5px;
    }

    @media (max-width: 750px) {
      width: 10px;
      height: 10px;
    }

    @media (max-width: 500px) {
      width: 8px;
      height: 8px;
    }

    @media (max-width: 400px) {
      width: 6px;
      height: 6px;
    }

    @media (max-width: 350px) {
      width: 5px;
      height: 5px;
    }

    @media (max-width: 330px) {
      width: 4px;
      height: 4px;
    }

    & img {
      min-width: 35px;
      min-height: 35px;
      aspect-ratio: 1/1;
      transition: 0.3s;

      @media (max-width: 450px) {
        min-width: 33px;
        min-height: 33px;
      }

      @media (max-width: 400px) {
        min-width: 31px;
        min-height: 31px;
      }

      @media (max-width: 350px) {
        min-width: 30px;
        min-height: 30px;
      }
    }

    &:hover {
      & img {
        transition: 0.3s;
        transform: scale(1.1);
      }
      span {
        opacity: 1;
      }
    }
  }
`;

export const Tag = styled.span`
  width: 60px;
  padding: 5px;

  text-align: center;
  display: block;

  position: absolute;
  top: -32px;

  opacity: 0;

  background-color: #14171a;
  color: var(--white);

  font-size: 16px;
  font-family: var(--font-family);

  border-radius: 20px;

  transition: 0.5s ease-in-out;
`;

export const Contato = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 900px) {
    gap: 0.4rem;
  }

  @media (max-width: 750px) {
    max-width: 40%;
  }

  & img {
    cursor: pointer;
    width: 40px;

    @media (max-width: 750px) {
      width: 20%;
    }

    @media (max-width: 650px) {
      width: 23%;
    }

    @media (max-width: 550px) {
      width: 25%;
    }
  }
  svg {
    cursor: pointer;
    color: blue;
  }
`;
