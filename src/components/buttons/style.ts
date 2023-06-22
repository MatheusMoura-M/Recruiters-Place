import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface iStyledProps {
  styled?: string;
}

export const ButtonStylized = styled.button<iStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 48px;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;

  border-radius: 8px;
  border: none;
  background: var(--color-primary);
  color: white;

  transition: 0.4s;
  &:hover {
    transition: 0.4s;

    box-shadow: 2px 2px 3px 1px #13117c;
    transform: translate(-2px, -2px);
  }

  &:active {
    box-shadow: 0 0 0 0, inset 2px 2px 2px 1px #13117c;
    transform: translate(2px, 2px);
  }

  @media (min-width: 580px) {
    width: 300px;
  }

  ${({ styled }) => {
    switch (styled) {
      case "align-end":
        return css`
          align-self: end;
        `;

      case "medium":
        return css`
          height: 40px;

          &:hover {
            box-shadow: 2px 2px 0 0.5px #13117c;
          }

          &:active {
            box-shadow: 0 0 0 0, inset 2px 2px 2px 0.5px #13117c;
          }
        `;

      default:
        return false;
    }
  }}
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 300px;
  min-height: 48px;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;

  border-radius: 8px;
  border: none;
  background: var(--color-primary);
  color: white;

  transition: 0.4s;
  &:hover {
    transition: 0.4s;

    box-shadow: 2px 2px 3px 1px #13117c;
    transform: translate(-2px, -2px);
  }

  &:active {
    box-shadow: 0 0 0 0, inset 2px 2px 2px 1px #13117c;
    transform: translate(2px, 2px);
  }

  @media (min-width: 580px) {
    max-width: 300px;
    width: 100%;
  }
`;

export const LinkContact = styled(Link)`
  font-family: var(--font-family);
  font-size: 18px;

  color: var(--color-primary);

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
`;
