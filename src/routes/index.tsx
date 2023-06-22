import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../context/webcontext";
import Chat from "../pages/Chatt";
import Feed from "../pages/Feedd";
import { LandingPage } from "../pages/LandingPage";
import { Login } from "../pages/Loginn";
import Register from "../pages/Registerr";
import { PrivateRoutes } from "./PrivateRoutes";
import Perfil from "../pages/Perfill";
import { FormEditProfile } from "../pages/DevDashboard/FormEditProfile";
import ContactUs from "../pages/Contactt";
import Error from "../pages/404";

function RoutesMain() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/:home" element={<Feed />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/chat" element={<Chat />} />
        <Route
          path="/perfil/editProfile"
          element={
            user?.isRecruiter ? <Navigate to="/home" /> : <FormEditProfile />
          }
        />
      </Route>
      <Route path="/notfound" element={<Error />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  );
}

export default RoutesMain;
