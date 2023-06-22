import { ModalLogOff } from "./style";
import { ModalFeedContainer } from "../Modal/Feed/styles";
import { useAuth } from "../../context/webcontext";

export function LogOffModal() {
  const { navigate, logOff, setLogOff, setCallId } = useAuth();

  function sair() {
    setCallId("");
    setLogOff(false);
    localStorage.clear();
    navigate("/");
  }

  return logOff ? (
    <ModalFeedContainer>
      <ModalLogOff>
        <h3>Sair</h3>
        <p>Tem certeza que você deseja sair?</p>
        <div>
          <button
            type="button"
            onClick={() => setLogOff(false)}
            className="cancelar"
          >
            Cancelar
          </button>
          <button type="button" onClick={() => sair()} className="sair">
            Sim, sair
          </button>
        </div>
      </ModalLogOff>
    </ModalFeedContainer>
  ) : null;
}
