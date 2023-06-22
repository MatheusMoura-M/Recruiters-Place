import PerfilRech from "../../components/PerfilRech";
import { useAuth } from "../../context/webcontext";
import { DevDashboard } from "../DevDashboard";

function Perfil() {
  const { user } = useAuth();

  return user?.isRecruiter ? <PerfilRech /> : <DevDashboard />;
}

export default Perfil;
