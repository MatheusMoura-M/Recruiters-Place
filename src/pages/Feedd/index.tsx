import { useEffect, useState } from "react";
import FotoPerfil from "../../assets/carbon_user-avatar.svg";
import ChatImg from "../../assets/ant-design_file-search-outlined.svg";
import Vermais from "../../assets/bi_chat-dots-fill.svg";
import duoChat from "../../assets/chat.png";
import { useAuth } from "../../context/webcontext";
import {
  ContainerDeveloper,
  ContainerFeed,
  Contato,
  DeveloperName,
  Developersvacancy,
  DivDevelopersInfo,
  DivDevelopersLinks,
  DivDevelopersName,
  DivDevelopersTech,
  Figure,
  Tag,
  Techs,
} from "./styles";
import ModalFeed from "../../components/Modal/Feed";
import ModalComent from "../../components/Modal/Comment/duality";
import ReadComent from "../../components/Modal/Comment/read";
import WriteComent from "../../components/Modal/Comment/write";
import ModalChat from "../../components/Modal/Chat";
import { v4 as uuid } from "uuid";
import { LogOffModal } from "../../components/LogOff";
import { iUser } from "../../interface";

function Feed() {
  const {
    navigate,
    allUsers,
    modalFeed,
    setModalFeed,
    modalComent,
    setModalComent,
    setComentId,
    user,
    modalChat,
    setModalChat,
    setChatId,
    filteredTechs,
    filterDevelopers,
    setFilterDevelopers,
    getAllUsers,
  } = useAuth();

  const [techsDeveloper, setTechsDeveloper] = useState<
    ({ tech: string; dir: string } | undefined)[] | null
  >(null);
  const [modalDeveloper, setModalDeveloper] = useState<iUser | null>(null);

  useEffect(() => {
    if (!localStorage.getItem("RPlace:Token")) {
      navigate("/");
    }
    if (filterDevelopers === undefined) {
      getAllUsers();
      setFilterDevelopers(
        allUsers?.filter((elem: iUser) => elem.isRecruiter === false)
      );
    }
  }, [allUsers, filterDevelopers]);

  return (
    <ContainerFeed>
      {filterDevelopers?.map((elem: iUser) => (
        <ContainerDeveloper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          key={uuid()}
        >
          <DivDevelopersInfo>
            <Figure>
              <img
                src={elem.fotoDoPerfil ? elem.fotoDoPerfil : FotoPerfil}
                alt="Foto de Perfil"
              />
            </Figure>
            <p>{elem?.email}</p>
            <p>{elem?.city}</p>
            <p>{elem?.schooling}</p>
          </DivDevelopersInfo>
          <DivDevelopersName>
            <DeveloperName>{elem?.name}</DeveloperName>
            <Developersvacancy>{elem?.vacancy}</Developersvacancy>
            <DivDevelopersLinks>
              <a href={elem?.linkedin} target="__blank">
                Linkedin
              </a>
              <a href={elem?.github} target="__blank">
                Github
              </a>
              <a href={elem?.portfolio} target="__blank">
                Portifolio
              </a>
            </DivDevelopersLinks>
          </DivDevelopersName>

          <DivDevelopersTech>
            <Techs>
              {filteredTechs(elem)?.map((value) => (
                <div key={uuid()}>
                  <img src={value?.dir} alt={value?.tech} />
                  <Tag>{value?.tech}</Tag>
                </div>
              ))}
            </Techs>

            <Contato>
              {user?.isRecruiter && (
                <img
                  src={duoChat}
                  alt="chat"
                  id={elem.id + ""}
                  onClick={(event) => {
                    setChatId((event.target as HTMLImageElement).id);
                    setModalChat(!modalChat);
                  }}
                />
              )}

              <img
                src={Vermais}
                alt="comments"
                id={elem.id + ""}
                onClick={(event) => {
                  setComentId((event.target as HTMLImageElement).id);
                  setModalComent(!modalComent);
                }}
              />
              <img
                src={ChatImg}
                alt="perfil"
                id={elem.id + ""}
                onClick={() => {
                  setModalFeed(!modalFeed);
                  setModalDeveloper(elem);
                  setTechsDeveloper(filteredTechs(elem));
                }}
              />
            </Contato>
          </DivDevelopersTech>
          <ModalFeed developer={modalDeveloper} techs={techsDeveloper} />
        </ContainerDeveloper>
      ))}

      <ModalComent />
      <ReadComent />
      <WriteComent />
      <ModalChat />
      <LogOffModal />
    </ContainerFeed>
  );
}

export default Feed;
