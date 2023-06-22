import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  background: #1da1f2;
  border-radius: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #fefefe;
  border: none;
  text-decoration: none;
  transition: 0.4s;
  z-index: 1000;

  width: 100%;
  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;
export const LinkStyled = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  background: #1da1f2;
  border-radius: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #fefefe;
  border: none;
  text-decoration: none;
  transition: 0.4s;
  z-index: 1000;
  width: 100%;
  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;

export const BoxBtn = styled.div`
  width: 700px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  width: 100%;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    margin-bottom: 3rem;
  }
`;

export const AllInputBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  margin-top: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 500px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    gap: 0rem;
    margin-bottom: 0rem;
  }
`;

export const TitleEditProfile = styled.h4`
  text-align: center;
  font-size: 1.6rem;
`;

export const TextAreaBio = styled.textarea`
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  padding: 2rem;
  max-height: 150px;
`;
