import { useEffect } from "react";
import { BoxStyled, Checkbox, ImgStyled, LabelImg } from "./style";
import { iTechs } from "../../../../../interface";

interface iBoxImgCheckbox {
  id: string;
  register: any;
  isActive?: boolean;
  setIsActiveTechs: any;
}

export const BoxImgCheckbox = ({
  id,
  register,
  isActive,
  setIsActiveTechs,
}: iBoxImgCheckbox) => {
  return (
    <BoxStyled>
      <Checkbox
        id={id}
        type="checkbox"
        {...register(id)}
        defaultChecked={isActive}
      />

      <LabelImg
        htmlFor={id}
        onClick={() => {
          setIsActiveTechs((old: any) => {
            return { ...old, [`${id}`]: !old[`${id}`] };
          });
        }}
      >
        <ImgStyled id={id} isActive={isActive} />
      </LabelImg>
    </BoxStyled>
  );
};
