import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SlPencil } from "react-icons/sl";
import { useAuth } from "../../context/webcontext";
import { schemaPerfilRech } from "../../schemas";
import { ButtonStylized } from "../Buttons/style";
import Input from "../Input";
import { LogOffModal } from "../Logoff";
import {
  Container,
  ContainerContent,
  ContainerMain,
  ContainerProfile,
  FormEditRech,
} from "./style";
import avatar from "../../assets/avatarTech.png";
import { iEditRech } from "../../interface";

const PerfilRech = () => {
  const { boxEdit, setBoxEdit, editSubmit, user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<iEditRech>({
    resolver: yupResolver(schemaPerfilRech),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      city: user?.city,
      linkedin: user?.linkedin,
      empresa: user?.empresa,
    },
  });

  return (
    <ContainerMain>
      <Container size="small">
        <ContainerProfile>
          <figure>
            <img src={avatar} alt="" />
          </figure>
          <div>
            <p>{user?.city}</p>
            <p>{user?.email}</p>
          </div>
        </ContainerProfile>
        <ContainerContent>
          <h2>{user?.name}</h2>
          {user?.empresa && <p>{user.empresa}</p>}
          {user?.linkedin && <a href={user?.linkedin}>Linkedin</a>}
        </ContainerContent>
        <SlPencil
          onClick={() => setBoxEdit(!boxEdit)}
          size={24}
          color="#1DA1F2"
          cursor="pointer"
        />
      </Container>
      {boxEdit && (
        <Container size="big">
          <FormEditRech
            onSubmit={handleSubmit((values) => editSubmit(values, reset))}
          >
            <Input
              id="name"
              type="text"
              label="Nome"
              register={register}
              getValues={getValues}
            />
            <Input
              id="city"
              type="text"
              label="Cidade"
              register={register}
              getValues={getValues}
            />
            <Input
              id="email"
              type="text"
              label="Editar email"
              register={register}
              getValues={getValues}
            />
            <Input
              id="password"
              type="password"
              label="Editar senha"
              register={register}
              getValues={getValues}
            />
            <Input
              id="empresa"
              type="text"
              label="Empresa"
              register={register}
              getValues={getValues}
            />
            <Input
              id="linkedin"
              type="text"
              label="Linkedin"
              register={register}
              getValues={getValues}
              errorMessage={errors.linkedin?.message}
            />
            <div className="box-btns">
              <ButtonStylized styled="medium" type="submit">
                Finalizar
              </ButtonStylized>
              <ButtonStylized
                styled="medium"
                onClick={() => setBoxEdit(false)}
                type="button"
              >
                Cancelar
              </ButtonStylized>
            </div>
          </FormEditRech>
        </Container>
      )}
      <LogOffModal />
    </ContainerMain>
  );
};

export default PerfilRech;
