import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../assets/RPlace_Clear.svg";

import homemLandinPage from "../../assets/imgAnimated/homemLandinPage.svg";
import mulherLandingPage from "../../assets/imgAnimated/mulherLandingPage.svg";
import setas from "../../assets/imgAnimated/setas.svg";

import {
  MainStyled,
  Container,
  TextAuth,
  TitleLogin,
  TitleAuth,
  ContainerImg,
  ContainerRedirect,
  ButtonLogout,
  ContainerWelcome,
} from "./style";
import { LinkStyled } from "../../components/Buttons/style";
import { useAuth } from "../../context/webcontext";
import Slogan from "../../components/BackgroundStyled";

export const LandingPage = () => {
  const { setUser, user } = useAuth();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <MainStyled>
          <Container>
            <ContainerImg>
              <div>
                <img
                  src={homemLandinPage}
                  alt="homemLandinPage"
                  className="homemLandinPage"
                />

                <div className="animatedArea">
                  <div className="homemAnimation">
                    <div className="bola"></div>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                  </div>

                  <img src={setas} alt="setas" className="setas" />

                  <div className="mulherAnimation">
                    <div className="bola"></div>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                  </div>
                </div>

                <img
                  src={mulherLandingPage}
                  alt="mulherLandingPage"
                  className="mulherLandingPage"
                />
              </div>
            </ContainerImg>

            <ContainerRedirect>
              <img src={Logo} alt="Logo site" />
              {localStorage.getItem("RPlace:Token") ? (
                <>
                  <ContainerWelcome>
                    <TitleAuth>
                      Bem vindo:
                      <br />
                      {user?.email}
                    </TitleAuth>
                  </ContainerWelcome>
                  <LinkStyled to="/home">Dashboard</LinkStyled>
                  <TextAuth>Deseja entrar em outra conta ?</TextAuth>
                  <ButtonLogout
                    onClick={() => {
                      window.localStorage.clear();
                      setUser(undefined);
                    }}
                  >
                    sair
                  </ButtonLogout>
                </>
              ) : (
                <>
                  <TitleLogin>Entrar</TitleLogin>

                  <LinkStyled to="/login">Login</LinkStyled>
                  <TextAuth>Caso não tenha uma conta</TextAuth>
                  <LinkStyled to="/register">Register</LinkStyled>
                </>
              )}
            </ContainerRedirect>
          </Container>

          <Slogan />
        </MainStyled>
      </motion.div>
    </AnimatePresence>
  );
};
