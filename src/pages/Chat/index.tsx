import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/webcontext";
import {
  ContainerChat,
  ContainerChatAll,
  ContainerChatCall,
  ContainerChatPerfil,
  ContainerInputSend,
} from "./style";
import send from "../../assets/send.png";
import FotoPerfil from "../../assets/carbon_user-avatar.svg";
import avatarTech from "../../assets/avatarTech.png";
import { v4 as uuid } from "uuid";
import { LogOffModal } from "../../components/LogOff";
import { iSend } from "../../interface";

function Chat() {
  const { allChats, user, setCallId, callId, onSubmitSendChat, allUsers } =
    useAuth();
  const myId = localStorage.getItem("RPlace:id");
  const { register, handleSubmit } = useForm<iSend>({});

  /*                TO                    */
  /* TODOS QUE MANDARAM MENSAGEM PARA MIM */
  const filterUserMsgToMe = allChats.filter((elem) => elem.idTo === myId);
  /* TODOS QUE MANDARAM PRA MIM SEM REPETIR O MESMO */
  const filterUsersMsgToMeNoRepeat = filterUserMsgToMe.filter(
    (e, i) =>
      i ===
      filterUserMsgToMe.findIndex(
        (elem) => elem.idFrom === e.idFrom && elem.idTo === e.idTo
      )
  );

  /*                FROM                    */
  /* TODOS QUE ENVIEI MENSAGEM              */
  const filterUserMsgFromMe = allChats.filter((elem) => elem.idFrom === myId);
  /* TODOS QUE ENVIEI MENSAGEM SEM REPETIR  */
  const filterUserMsgFromMeNoRepeat = filterUserMsgFromMe.filter(
    (e, i) =>
      i ===
      filterUserMsgFromMe.findIndex(
        (elem) => elem.idFrom === e.idFrom && elem.idTo === e.idTo
      )
  );
  const developer = allUsers?.find((element) => String(element.id) === callId);

  useEffect(() => {
    // getAllChats();
  }, []);

  return (
    <ContainerChat>
      <ul>
        {user?.isRecruiter
          ? filterUserMsgFromMeNoRepeat.map((chat) => (
              <li key={uuid()}>
                <h1 id={chat.idTo} onClick={() => setCallId(chat.idTo)}>
                  <img src={FotoPerfil} alt="" />
                  <p>{chat.to}</p>
                </h1>
              </li>
            ))
          : filterUsersMsgToMeNoRepeat.map(
              (chat) =>
                chat.idTo === String(myId) && (
                  <li key={uuid()}>
                    <h1 id={chat.idFrom} onClick={() => setCallId(chat.idFrom)}>
                      <img src={avatarTech} alt="" />
                      <p>{chat.from}</p>
                    </h1>
                  </li>
                )
            )}
      </ul>
      <ContainerChatAll>
        {callId && (
          <section>
            <img
              src={
                developer?.isRecruiter ? avatarTech : developer?.fotoDoPerfil
              }
              alt=""
            />
            <div>
              <h3>{developer?.name}</h3>
              <p>
                {developer?.isRecruiter ? "Tech Recruiter" : developer?.vacancy}
              </p>
              {developer?.empresa && <p>{developer.empresa}</p>}
            </div>
          </section>
        )}
        <ContainerChatCall>
          {callId ? (
            allChats.map(
              (elemento) =>
                ((elemento.idTo === callId && elemento.idFrom === myId) ||
                  (elemento.idFrom === callId && elemento.idTo === myId)) && (
                  <div
                    key={uuid()}
                    className={
                      myId === elemento.idFrom ? "alignRigth" : "alignLeft"
                    }
                  >
                    <h2>{elemento.chat}</h2>
                  </div>
                )
            )
          ) : (
            <div className="nothingMessage">
              <h2>Nenhuma conversa aberta</h2>
            </div>
          )}
        </ContainerChatCall>
        <ContainerInputSend onSubmit={handleSubmit(onSubmitSendChat)}>
          <input type="text" {...register("chat")} />
          <button type="submit">
            <img src={send} alt="" />
          </button>
        </ContainerInputSend>
      </ContainerChatAll>

      <ContainerChatPerfil>
        {callId && (
          <img
            src={
              developer?.fotoDoPerfil
                ? developer.fotoDoPerfil
                : developer?.isRecruiter
                ? avatarTech
                : FotoPerfil
            }
            alt=""
          />
        )}
        <h3>{developer?.name}</h3>
        <p>{developer?.isRecruiter ? "Tech Recruiter" : developer?.vacancy}</p>
        {developer?.empresa && <p>{developer.empresa}</p>}
        {callId && (
          <a href={developer?.linkedin} target="__blank">
            LinkedIn
          </a>
        )}
      </ContainerChatPerfil>
      <LogOffModal />
    </ContainerChat>
  );
}

export default Chat;
