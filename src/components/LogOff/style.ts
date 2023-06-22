import styled from "styled-components";

export const ModalLogOff = styled.section`
  font-family: var(--font-family);
  background-color: var(--color-secondary);
  width: 25%;
  min-width: 320px;
  height: 320px;
  gap: 15px;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  h3 {
    font-size: 21px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }

  button {
    font-size: 16px;
    font-weight: 500;

    width: 100%;
    min-width: 130px;
    height: 50px;

    border-radius: 8px;
  }

  div {
    display: flex;
    flex-flow: row nowrap;
    margin-top: 25px;
    gap: 15px;
  }

  .cancelar {
    background-color: var(--grey-5);
    color: var(--grey-2);
  }

  .sair {
    background-color: var(--color-error);
    color: var(--grey-6);
  }
`;
