import { useRef } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { ContainerFormContact, ContainerImg, MainContainer } from "./style";
import Logo from "../../assets/Logo.svg";
import { ButtonStylized } from "../../components/Buttons/style";
import emailjs from "@emailjs/browser";
import { useAuth } from "../../context/webcontext";

function ContactUs() {
  const { navigate } = useAuth();

  const { register, getValues } = useForm({});

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4xcvgit",
        "template_i8zgodl",
        form.current as HTMLFormElement | string,
        "b0jyyoI0tatXmI68y"
      )
      .then(
        (result) => {
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <MainContainer>
      <ContainerImg>
        <img src={Logo} alt="" onClick={() => navigate("/")} />
      </ContainerImg>
      <ContainerFormContact ref={form} onSubmit={sendEmail}>
        <Input
          type="text"
          label="Nome"
          id="name"
          register={register}
          getValues={getValues}
          name="name"
        />
        <Input
          type="text"
          label="email"
          id="email"
          register={register}
          getValues={getValues}
          name="email"
        />
        <Input
          type="text"
          label="Motivo do contato"
          id="reason"
          register={register}
          getValues={getValues}
          name="reason"
        />

        <textarea name="message" id=""></textarea>
        <ButtonStylized>Enviar</ButtonStylized>
      </ContainerFormContact>
    </MainContainer>
  );
}

export default ContactUs;
