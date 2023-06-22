import styled from "styled-components";

export const RegisterForm = styled.form`
  display: flex;
  flex-flow: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;

  .InputsContainer {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  .Recruiter-Opt {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    span {
      font-size: 20px;
    }

    input {
      cursor: pointer;
    }
  }

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 100%;
    max-width: 300px;
    height: 48px;

    background: #1da1f2;
    color: #fefefe;
    border-radius: 8px;
    border: none;

    font-family: var(--font-family);
    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    text-decoration: none;
    transition: 0.4s;
    z-index: 1000;

    &:hover {
      transition: 0.4s;
      box-shadow: 2px 2px 3px 1px #13117c;
      transform: translate(-2px, -2px);
    }
    &:active {
      box-shadow: 0 0 0 0, inset 2px 2px 2px 1px #13117c;
      transform: translate(2px, 2px);
    }
  }
`;
