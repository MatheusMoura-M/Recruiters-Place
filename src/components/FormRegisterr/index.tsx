import { RegisterForm } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import ModalRegister from "../Modal/Register";
import { useState } from "react";
import { keyboardKey } from "@testing-library/user-event";
import { iProgressProps, iUserRegister } from "../../interface";
import { useAuth } from "../../context/webcontext";
import { schemaFormRegister } from "../../schemas";

export function FormRegister() {
  const { onRegister } = useAuth();

  //States
  const [show, setShow] = useState<boolean>(false);
  const [isRecruiter, setIsRecruiter] = useState<boolean>(false);
  const [progress, setProgress] = useState<iProgressProps>({
    phase: 1,
    nextPhase: 2,
  });

  // functions
  const registerUser = async (): Promise<void> => {
    const isRecruiter = getValues("isRecruiter");

    const valid = await trigger(["name", "email", "password", "checkpass"], {
      shouldFocus: true,
    });

    if (!isRecruiter && valid) {
      setShow(true);
      setProgress({ phase: 2, nextPhase: 3 });
    } else {
      if (isRecruiter && valid) {
        setShow(true);
        setProgress({ phase: 5, nextPhase: null });
      }
    }
  };

  const setRecruiterTrue = () => {
    setIsRecruiter(true);
  };

  const forceOpenModal = async (e: keyboardKey): Promise<void> => {
    if (e.key === "Enter") {
      const valid = await trigger(["name", "email", "password", "checkpass"]);
      if (valid) registerUser();
    }
  };

  // validations
  const type = isRecruiter ? "submit" : "button";

  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
    trigger,
  } = useForm<iUserRegister>({
    resolver: yupResolver(schemaFormRegister),
  });

  return (
    <>
      <RegisterForm
        onKeyDown={(e: keyboardKey) => forceOpenModal(e)}
        onSubmit={handleSubmit(onRegister)}
      >
        <div className="InputsContainer">
          <Input
            type="text"
            label="Nome"
            id="name"
            register={register}
            getValues={getValues}
            errors={errors.name}
          />
          <Input
            type="text"
            label="Email"
            id="email"
            register={register}
            getValues={getValues}
            errors={errors.email}
          />
          <Input
            type="password"
            label="Senha"
            id="password"
            register={register}
            getValues={getValues}
            errors={errors.password}
          />
          <Input
            type="password"
            label="Confirmar Senha"
            id="checkpass"
            register={register}
            getValues={getValues}
            errors={errors.checkpass}
          />
        </div>
        <div className="Recruiter-Opt">
          <span>Recrutador?</span>
          <input
            type="checkbox"
            id="recruiter"
            {...register("isRecruiter")}
            onClick={setRecruiterTrue}
          />
        </div>
        <button type={type} onClick={registerUser}>
          Cadastre-se
        </button>
      </RegisterForm>
      {!!show && (
        <ModalRegister
          errors={errors}
          fn={onRegister}
          getValues={getValues}
          handleSubmit={handleSubmit}
          progress={progress}
          register={register}
          reset={reset}
          setProgress={setProgress}
          setShow={setShow}
          trigger={trigger}
        />
      )}
    </>
  );
}
