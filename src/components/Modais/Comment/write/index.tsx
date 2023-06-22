import {
  ModalComentWriteContainer,
  ModalComentWriteContainerButton,
  ModalComentWriteContainerMessage,
} from "./style";
import close from "../../../../assets/close.png";
import FormMessage from "../../../FormMessage";
import { useAuth } from "../../../../context/webcontext";

function WriteComent() {
  const { modalWriteComent, setModalComent, setModalWriteComent } = useAuth();

  return modalWriteComent ? (
    <ModalComentWriteContainer>
      <div>
        <ModalComentWriteContainerButton>
          <h1>Escrever comentário</h1>
          <img
            src={close}
            alt=""
            onClick={() => {
              setModalWriteComent(!modalWriteComent);
              setModalComent(true);
            }}
          />
        </ModalComentWriteContainerButton>

        <ModalComentWriteContainerMessage>
          <FormMessage />
        </ModalComentWriteContainerMessage>
      </div>
    </ModalComentWriteContainer>
  ) : null;
}

export default WriteComent;
