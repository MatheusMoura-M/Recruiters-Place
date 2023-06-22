import Logo from "../../assets/Logo.svg";
import { BoxSlogan, FormLogin, MainLogin, SectionLogin } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../schemas";
import Input from "../../components/Input";
import {
  ButtonStylized,
  LinkContact,
  LinkStyled,
} from "../../components/Buttons/style";
import HomemLogin from "../../assets/HomemLogin.svg";
import ImgLogin from "../../assets/ImgLogin.svg";
import { useEffect } from "react";
import { useAuth } from "../../context/webcontext";
import { ErrorMessage } from "../../components/ParagraphError";
import Slogan from "../../components/BackgroundStyled";
import { iUserLogin } from "../../interface";

export const Login = () => {
  const { navigate, onLogin, loading } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("RPlace:Token")) {
      navigate("/home");
    }
  }, []);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<iUserLogin>({
    resolver: yupResolver(schemaLogin),
  });

  return (
    <MainLogin>
      <div className="boxAnimated">
        <img src={ImgLogin} alt="ImgLogin" className="ImgLogin" />
        <img src={HomemLogin} alt="Logo" className="HomemLogin" />
        <span className="line1"></span>
        <span className="line2"></span>
      </div>
      <SectionLogin>
        <div className="containerLogin">
          <figure className="boxLogo">
            <img src={Logo} alt="Logo" />
          </figure>
          <FormLogin onSubmit={handleSubmit(onLogin)}>
            <h3>Entrar</h3>
            <Input
              label="Email"
              type="text"
              errorMessage={errors.email?.message}
              register={register}
              id="email"
              getValues={getValues}
              login={true}
            />
            <Input
              label="Senha"
              type="password"
              errorMessage={errors.password?.message}
              register={register}
              id="password"
              login={true}
              getValues={getValues}
              showPass={true}
            />
            <ButtonStylized type="submit">
              {!loading && <>Login</>}
              {loading && (
                <div className="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )}
            </ButtonStylized>

            <span>Não tem uma conta ?</span>
            <LinkStyled to="/register">Register</LinkStyled>
          </FormLogin>
        </div>
      </SectionLogin>

      <BoxSlogan>
        <Slogan />
        <section>
          <h1>Alguma dúvida ?</h1>
          <LinkContact to="/contactus">Entre em contato</LinkContact>
        </section>
      </BoxSlogan>
    </MainLogin>
  );
};
