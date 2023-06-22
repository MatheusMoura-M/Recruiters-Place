import styled, { css } from "styled-components";

interface iFormStyled {
  step: 1 | 2;
}

const FormStyledVariant = {
  1: css`
    background: #f5f8fa;
    border: 2px solid #1da1f2;
    border-radius: 15px;
    max-width: 700px;
    min-height: 556px;
    height: auto;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 750px) {
      margin-top: 5rem;
      border: none;
      height: 90vh;
      background: #f5f8fa;
    }
  `,
  2: css`
    background: #f5f8fa;
    border: 2px solid #1da1f2;
    border-radius: 15px;
    max-width: 700px;
    min-height: 556px;
    height: auto;
    margin: 0 auto;
    padding: 2rem;
    height: 100%;

    @media (max-width: 750px) {
      margin-top: 5rem;
      border: none;
      height: 90vh;
      background: #f5f8fa;
    }
  `,
};

export const BoxForm = styled.div<iFormStyled>`
  ${({ step }) => FormStyledVariant[step]}
  margin-top: 2rem;
`;
