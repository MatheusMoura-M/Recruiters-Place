import {
  ModalChatContainer,
  ModalChatContainerButton,
  ModalChatContainerMessage,
} from "./style";
import close from "../../../assets/close.png";
import FormChat from "../../FormChat";
import { useAuth } from "../../../context/webcontext";

function ModalChat() {
  const { setModalChat, modalChat } = useAuth();

  return modalChat ? (
    <ModalChatContainer>
      <div>
        <ModalChatContainerButton>
          <h1>Enviar mensagem</h1>
          <img
            src={close}
            alt=""
            onClick={() => {
              setModalChat(!modalChat);
            }}
          />
        </ModalChatContainerButton>

        <ModalChatContainerMessage>
          <FormChat />
        </ModalChatContainerMessage>
      </div>
    </ModalChatContainer>
  ) : null;
}

export default ModalChat;
