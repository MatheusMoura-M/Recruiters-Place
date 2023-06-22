import styled, { css } from "styled-components";

import techList from "../../../../../mockList/devTechs.json";

interface iCheckbox {
  id: string;
}

interface iImgStyled {
  id?: string;
  isActive?: boolean;
}

export const Checkbox = styled.input<iCheckbox>`
  visibility: hidden;
`;

export const BoxStyled = styled.div`
  width: 100px;
  height: 100px;
`;

export const LabelImg = styled.label`
  min-width: 20px;
  min-height: 20px;
`;

export const ImgStyled = styled.img.attrs(({ id }) => {
  switch (id) {
    case "html":
      return { src: techList[2].dir };
    case "css":
      return { src: techList[1].dir };
    case "js":
      return { src: techList[3].dir };
    case "react":
      return { src: techList[4].dir };
    case "node":
      return { src: techList[10].dir };
    case "angular":
      return { src: techList[0].dir };
    case "ts":
      return { src: techList[6].dir };
    case "vuejs":
      return { src: techList[5].dir };
    case "sass":
      return { src: techList[9].dir };
    case "c":
      return { src: techList[8].dir };
    case "php":
      return { src: techList[7].dir };
  }
})<iImgStyled>`
  color: red;
  cursor: pointer;
  transition: all 400ms;
  width: 80px;
  ${({ isActive }: iImgStyled) =>
    !isActive &&
    css`
      filter: contrast(175%) brightness(0.3);
    `}
`;
