import { ButtonStylized } from "../../../Buttons/style";
import { ModalComentContainer } from "./style";
import close from "../../../../assets/close.png";
import { useAuth } from "../../../../context/webcontext";

function ModalComent() {
  const { modalComent, setModalComent, readModalComent, writeModalComent } =
    useAuth();

  return modalComent ? (
    <ModalComentContainer>
      <div>
        <div className="closeDiv">
          <img
            src={close}
            alt=""
            onClick={() => setModalComent(!modalComent)}
          />
        </div>
        <ButtonStylized onClick={() => writeModalComent()}>
          Escrever comentário
        </ButtonStylized>
        <ButtonStylized onClick={() => readModalComent()}>
          Ver comentários
        </ButtonStylized>
      </div>
    </ModalComentContainer>
  ) : null;
}

export default ModalComent;
