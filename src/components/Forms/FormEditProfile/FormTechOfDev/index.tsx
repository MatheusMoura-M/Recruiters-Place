import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BoxImgCheckbox } from "../../../../components/Forms/FormEditProfile/FormTechOfDev/BoxImgCheckbox";
import { BoxBtns, TechsBox, FormStyled } from "./style";
import { Api } from "../../../../services/api";
import { ButtonStyled } from "../../../../components/Forms/FormEditProfile/FormDataOfDev/style";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import {
  iApiError,
  iFormEditProfile,
  iTechs,
  iUser,
} from "../../../../interface";
import { useAuth } from "../../../../context/webcontext";
import { schemaEditDevTech } from "../../../../schemas";

interface iTechOfDev {
  setStep: Dispatch<SetStateAction<1 | 2>>;
}

export const FormTechOfDev = ({ setStep }: iTechOfDev) => {
  const {
    user,
    setUser,
    getAllUsers,
    setFilterDevelopers,
    allUsers,
    loadUser,
  } = useAuth();

  const [isActiveTechs, setIsActiveTechs] = useState<iTechs | undefined>({
    html: false,
    css: false,
    js: false,
    react: false,
    ts: false,
    angular: false,
    node: false,
    vuejs: false,
    sass: false,
  });

  useEffect(() => {
    loadUser();
    setIsActiveTechs(user?.tech);
  }, []);

  const { register, handleSubmit } = useForm<iFormEditProfile>({
    resolver: yupResolver(schemaEditDevTech),
  });

  const onSubmit: SubmitHandler<iFormEditProfile> = async () => {
    try {
      const { data } = await Api.patch<iUser>(
        "/user",
        { tech: { ...isActiveTechs } },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("RPlace:Token")}`,
          },
        }
      );

      getAllUsers();
      setFilterDevelopers(
        allUsers?.filter((elem: iUser) => elem.isRecruiter === false)
      );
      setUser(data);

      toast.success("Tecnologias atualizadas!");
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.error(requestError.response?.data.error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <TechsBox>
          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="html"
            register={register}
            isActive={isActiveTechs?.html}
          />

          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="css"
            register={register}
            isActive={isActiveTechs?.css}
          />

          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="js"
            register={register}
            isActive={isActiveTechs?.js}
          />
          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="react"
            register={register}
            isActive={isActiveTechs?.react}
          />

          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="ts"
            register={register}
            isActive={isActiveTechs?.ts}
          />
          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="node"
            register={register}
            isActive={isActiveTechs?.node}
          />
          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="angular"
            register={register}
            isActive={isActiveTechs?.angular}
          />
          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="vuejs"
            register={register}
            isActive={isActiveTechs?.vuejs}
          />
          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="sass"
            register={register}
            isActive={isActiveTechs?.sass}
          />
          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="php"
            register={register}
            isActive={isActiveTechs?.php}
          />
          <BoxImgCheckbox
            setIsActiveTechs={setIsActiveTechs}
            id="c"
            register={register}
            isActive={isActiveTechs?.c}
          />
        </TechsBox>

        <BoxBtns>
          <ButtonStyled onClick={() => setStep(1)}>Voltar</ButtonStyled>
          <ButtonStyled type="submit">Salvar</ButtonStyled>
        </BoxBtns>
      </FormStyled>
    </motion.div>
  );
};
