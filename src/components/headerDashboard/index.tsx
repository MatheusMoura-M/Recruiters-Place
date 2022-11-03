import { HeaderContainer } from "./style";
import Logo from "../../assets/RPlace_Clear.svg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ListMock } from "../../mockList/devType";

function HeaderDashboard() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(false);

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <HeaderContainer>
        <header>
          <img src={Logo} alt="Logo" />
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    setFilter(!filter);
                  }}
                >
                  Encontrar Devs
                </button>
              </li>
              <li>
                <Link to={"/perfil"}>Perfil</Link>
              </li>
              <li>
                <button onClick={() => handleLogout()}>Sair</button>
              </li>
            </ul>
          </nav>
        </header>
        {filter && (
          <ul>
            <li>Todos</li>
            {ListMock.map((devType) => (
              <li key={devType}>{devType}</li>
            ))}
          </ul>
        )}
      </HeaderContainer>
      <Outlet />
    </>
  );
}

export default HeaderDashboard;
