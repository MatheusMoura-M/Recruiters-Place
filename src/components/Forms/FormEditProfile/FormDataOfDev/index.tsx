import { Dispatch, SetStateAction, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  ButtonStyled,
  BoxBtn,
  LinkStyled,
  AllInputBox,
  TitleEditProfile,
  TextAreaBio,
} from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../../../context/webcontext";
import { iFormEditProfile, iUser } from "../../../../interface";
import { schemaEditDevInfo } from "../../../../schemas";
import Input from "../../../Input";

interface iPersonalDataOfDev {
  setStep: Dispatch<SetStateAction<1 | 2>>;
}

export const FormDataOfDev = ({ setStep }: iPersonalDataOfDev) => {
  const { user, editDataOfDevSubmit, loadUser } = useAuth();

  useEffect(() => {
    loadUser();
  }, []);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<iFormEditProfile>({
    resolver: yupResolver(schemaEditDevInfo),
  });

  const onSubmit: SubmitHandler<iFormEditProfile> = async (formData) => {
    delete formData.tech;
    editDataOfDevSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <TitleEditProfile>Editar Perfil</TitleEditProfile>
        <TextAreaBio
          id="bio"
          rows={10}
          {...register("bio")}
          placeholder="Bio"
          defaultValue={user?.bio}
        />

        <AllInputBox>
          <div>
            <Input
              id="name"
              label="Nome"
              register={register}
              type="text"
              defaultValue={user?.name}
              errors={errors.name}
              getValues={getValues}
            />

            <Input
              type="text"
              id="vacancy"
              register={register}
              label="Cargo"
              defaultValue={user?.vacancy}
              getValues={getValues}
            />

            <Input
              type="text"
              id="linkedin"
              register={register}
              label="LinkedIn"
              defaultValue={user?.linkedin}
              getValues={getValues}
            />

            <Input
              type="text"
              id="portfolio"
              register={register}
              label="Portifolio"
              defaultValue={user?.portfolio}
              getValues={getValues}
            />

            <Input
              type="text"
              id="fotoDoPerfil"
              register={register}
              label="Foto do Perfil"
              defaultValue={user?.fotoDoPerfil}
              getValues={getValues}
            />
          </div>

          <div>
            <Input
              type="text"
              id="city"
              register={register}
              label="Localização"
              defaultValue={user?.city}
              getValues={getValues}
            />
            <Input
              type="email"
              id="email"
              register={register}
              label="Email"
              defaultValue={user?.email}
              getValues={getValues}
              errors={errors.email}
            />

            <Input
              type="text"
              id="schooling"
              register={register}
              label="Escolaridade"
              defaultValue={user?.schooling}
              getValues={getValues}
            />
            <Input
              type="text"
              id="github"
              register={register}
              label="GitHub"
              defaultValue={user?.github}
              getValues={getValues}
            />
          </div>
        </AllInputBox>

        <BoxBtn>
          <LinkStyled to="/perfil">Voltar</LinkStyled>
          <ButtonStyled type="submit">Salvar</ButtonStyled>
          <ButtonStyled type="button" onClick={() => setStep(2)}>
            Proximo
          </ButtonStyled>
        </BoxBtn>
      </form>
    </motion.div>
  );
};
