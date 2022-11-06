import { HeaderContainer } from "./style";
import Logo from "../../assets/RPlace_Clear.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ListMock } from "../../mockList/devType";
import techList from "../../mockList/devTechs.json";
import { LogOffModal } from "../../components/logoff"

function HeaderDashboard() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(false);
  const [logOff, setLogOff] = useState(false);

  function handleLogout() {
    setLogOff(true);
  }

  function goToPerfil() {
    setFilter(false);
    navigate("perfil");
  }
  function goToChat() {
    setFilter(false);
    navigate("chat");
  }

  return (
    <>
      <HeaderContainer>
        {logOff ? <LogOffModal/> : ''}
        <header>
          <img onClick={() => navigate("/home")} src={Logo} alt="Logo" />
          <nav>
            <ul>
              <li>
                <button onClick={() => goToPerfil()}>Perfil</button>
                <span className="spanBorder"></span>
              </li>
              <li>
                <button onClick={() => goToChat()}>Mensagens</button>
                <span className="spanBorder"></span>
              </li>
              <li>
                <button
                  onClick={() => {
                    setFilter(!filter);
                  }}
                >
                  Encontrar Devs
                  <span className="spanBorder"></span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLogout()}>Sair</button>
                <span className="spanBorder"></span>
              </li>
            </ul>
          </nav>
        </header>
        {filter && (
          <div>
            <ul>
              <li>Todos</li>
              {ListMock.map((devType) => (
                <li key={devType}>{devType}</li>
              ))}
            </ul>
            <ul>
              <li>Tecnologias</li>
              {techList &&
                techList.map((devTech) => (
                  <li key={devTech.tech}>
                    <img src={devTech.dir} alt="devTech.tech"></img>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </HeaderContainer>
    </>
  );
}

export default HeaderDashboard;
