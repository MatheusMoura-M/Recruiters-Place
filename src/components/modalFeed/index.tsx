import { useContext } from "react";
import { iUser, iWebContext, WebContext } from "../../context/webcontext";
import {
  DeveloperName,
  DevelopersCargo,
  DivBio,
  DivInfo,
  DivInfoEmail,
  DivLinks,
  DivPersonalInfo,
  FigureModal,
  ModalFeedContainer,
  Techs,
} from "./styles";
import FotoPerfil from "../../assets/carbon_user-avatar.svg";
import { v4 as uuid } from "uuid";
import { Tag } from "../../pages/feed/styles";
import close from "../../assets/close.png";

interface iModalFeedProps {
  developer: iUser | null;
  techs: ({ tech: string; dir: string } | undefined)[] | null;
}

function ModalFeed({ developer, techs }: iModalFeedProps) {
  const { modalFeed, setModalFeed } = useContext<iWebContext>(WebContext);

  return modalFeed ? (
    <ModalFeedContainer>
      <div>
        <img src={close} alt="Close" onClick={() => setModalFeed(!modalFeed)} />
        <DivPersonalInfo>
          <FigureModal>
            <img src={FotoPerfil} alt="Foto de Perfil" />
          </FigureModal>
          <DivInfoEmail>
            <p>{developer?.city}</p>
            <p>{developer?.email}</p>
            <p>{developer?.schooling}</p>
          </DivInfoEmail>

          <DivLinks>
            <a href={developer?.linkedin}>Linkedin</a>
            <a href={developer?.github}>Github</a>
            <a href={developer?.portfolio}>Portifolio</a>
          </DivLinks>
        </DivPersonalInfo>
        <DivInfo>
          <div>
            <DeveloperName>{developer?.name}</DeveloperName>
            <DevelopersCargo>{developer?.cargo}</DevelopersCargo>
          </div>

          <DivBio>
            {developer?.bio ? (
              <p>{developer?.bio}</p>
            ) : (
              <p>{developer?.name} não possui uma bio</p>
            )}
          </DivBio>

          <Techs>
            {techs?.map((value) => (
              <div key={uuid()}>
                <img src={value?.dir} alt={value?.tech} />
                <Tag>{value?.tech}</Tag>
              </div>
            ))}
          </Techs>
        </DivInfo>
      </div>
    </ModalFeedContainer>
  ) : null;
}

export default ModalFeed;
