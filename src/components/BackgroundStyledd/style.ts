import styled, { css } from "styled-components";

export const BackgroundStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 200px;
  width: 80%;
  max-width: 668px;
  background: #1da1f2;
  border-radius: 0px 200px 200px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem;
  margin-top: 50px;
`;

export const SloganBackground = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 100%;
  color: var(--grey-1);

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const TitleBackground = styled.p`
  display: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 100%;
  color: var(--grey-1);

  @media (min-width: 768px) {
    display: block;
  }
`;

export const TextBackground = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: #f5f8fa;
`;
