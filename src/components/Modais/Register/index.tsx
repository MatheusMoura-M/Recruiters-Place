import ModalContainer from "./modal";
import {
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormTrigger,
  FieldErrors,
  UseFormReset,
} from "react-hook-form";
import Input from "../../Input";
import { CheckCircle, CircleNotch, XCircle } from "phosphor-react";
import ModalTechs from "./modalTechs";
import { LinkStyled } from "../../Buttons/style";
import Select from "../../Select";
import { keyboardKey } from "@testing-library/user-event";
import { iProgressProps, iUserRegister } from "../../../interface";
import { useAuth } from "../../../context/webcontext";

interface iModalProps {
  errors: FieldErrors<iUserRegister>;
  fn: (data: iUserRegister) => void;
  getValues: UseFormGetValues<iUserRegister>;
  handleSubmit: UseFormHandleSubmit<any>;
  progress: iProgressProps;
  register: UseFormRegister<any>;
  reset: UseFormReset<any>;
  setProgress: (progress: iProgressProps) => void;
  setShow: (show: boolean) => void;
  trigger: UseFormTrigger<iUserRegister>;
}

const ModalRegister = ({
  errors,
  fn,
  getValues,
  handleSubmit,
  progress,
  register,
  reset,
  setProgress,
  setShow,
  trigger,
}: iModalProps) => {
  // context
  const { resolved, setResolved } = useAuth();

  // functions
  const backFn = () => {
    if (progress.phase === 2) {
      setShow(false);
      setProgress({ phase: 1, nextPhase: 2 });
    }

    if (progress.phase === 3) setProgress({ phase: 2, nextPhase: 3 });

    if (progress.phase === 4) setProgress({ phase: 3, nextPhase: 4 });
  };

  const advanceToAbout = async (e: keyboardKey | null) => {
    if (e?.key === "Enter" || e === null) {
      const valid = await trigger(["city", "schooling", "vacancy"]);
      if (valid) setProgress({ phase: 3, nextPhase: 4 });
    }
  };

  const skipAbout = () => {
    setProgress({ phase: 3, nextPhase: 4 });
  };

  const advanceToLinks = async (e: keyboardKey | null) => {
    if (e?.key === "Enter" || e === null) {
      const valid = await trigger(["linkedin", "github", "portfolio"]);
      if (valid) setProgress({ phase: 4, nextPhase: 5 });
    }
  };

  const skipLinks = () => {
    setProgress({ phase: 4, nextPhase: 5 });
  };

  const reSubmit = () => {
    setResolved(undefined);
    handleSubmit(fn)();
  };

  const cancelSubmit = () => {
    reset();
    setShow(false);
    setResolved(undefined);
  };

  const onFinishing = (resolved: boolean | undefined) => {
    if (typeof resolved === "undefined") {
      return (
        <>
          <div className="loading">
            <CircleNotch size={64} color="#1DA1F2" />
          </div>
          <h3>Registrando...</h3>
        </>
      );
    } else if (resolved)
      return (
        <>
          <CheckCircle size={150} color="#4bad31" />
          <h3>Cadastro realizado com sucesso</h3>
          <LinkStyled to={"/login"}>Fazer login</LinkStyled>
        </>
      );
    else
      return (
        <>
          <XCircle size={150} color="#e2142d" />
          <h3>Ops, aconteceu algum problema</h3>
          <form>
            <button type="button" onClick={reSubmit}>
              Tentar novamente
            </button>
            <button type="button" onClick={cancelSubmit}>
              Fechar
            </button>
          </form>
        </>
      );
  };

  // validations
  const bar1 =
    progress.phase === 1
      ? "onProgress"
      : resolved === false
      ? "error"
      : "completed";
  const bar2 =
    progress.phase === 1
      ? "notCompleted"
      : progress.phase === 2
      ? "onProgress"
      : resolved === false
      ? "error"
      : "completed";
  const bar3 =
    progress.phase === 1
      ? "notCompleted"
      : progress.phase === 2
      ? "notCompleted"
      : progress.phase === 3
      ? "onProgress"
      : resolved === false
      ? "error"
      : "completed";

  const bar4 =
    progress.phase === 1
      ? "notCompleted"
      : progress.phase === 2
      ? "notCompleted"
      : progress.phase === 3
      ? "notCompleted"
      : progress.phase === 4
      ? "onProgress"
      : resolved === false
      ? "error"
      : "completed";
  return (
    <ModalContainer progress={progress}>
      <div>
        <button className="back" onClick={backFn}>
          Voltar
        </button>
        <div className="progressBarContainer">
          <div className={bar1}></div>
          <div className={bar2}></div>
          <div className={bar3}></div>
          <div className={bar4}></div>
        </div>
        {progress.phase === 2 ? (
          <form
            onKeyDown={(e) => advanceToAbout(e)}
            onSubmit={(e) => e.preventDefault()}
            className={`progress-${progress.phase}`}
          >
            <h2>Sobre você</h2>
            <Input
              errors={errors.city}
              getValues={getValues}
              id="city"
              label="Local"
              register={register}
              type="text"
            />
            <Select
              errors={errors.schooling}
              getValues={getValues}
              id="schooling"
              label="Escolaridade"
              register={register}
            />
            <Select
              errors={errors.vacancy}
              getValues={getValues}
              id="vacancy"
              label="Selecione seu vacancy"
              register={register}
            />
            <div className="controls">
              <div className="working">
                <input type="checkbox" id="isWork" {...register("isWork")} />
                <label htmlFor="isWork">Esta trabalhando no momento?</label>
              </div>
              <button type="button" onClick={() => advanceToAbout(null)}>
                Avançar
              </button>
              <button type="button" onClick={skipAbout}>
                Pular etapa
                <input
                  type="checkbox"
                  id="skipAbout"
                  {...register("skipAbout")}
                />
              </button>
            </div>
          </form>
        ) : null}
        {progress.phase === 3 ? (
          <form
            onKeyDown={(e) => advanceToLinks(e)}
            onSubmit={(e) => e.preventDefault()}
            className={`progress-${progress.phase}`}
          >
            <h2>Links</h2>
            <Input
              errors={errors.linkedin}
              getValues={getValues}
              id="linkedin"
              label="Linkedin"
              register={register}
              type="text"
            />
            <Input
              errors={errors.github}
              getValues={getValues}
              id="github"
              label="Github"
              register={register}
              type="text"
            />
            <Input
              errors={errors.portfolio}
              getValues={getValues}
              id="portfolio"
              label="Portifolio"
              register={register}
              type="text"
            />
            <div className="controls">
              <button type="button" onClick={() => advanceToLinks(null)}>
                Avançar
              </button>
              <button type="button" onClick={skipLinks}>
                Pular etapa
                <input
                  type="checkbox"
                  id="skipLinks"
                  {...register("skipLinks")}
                />
              </button>
            </div>
          </form>
        ) : null}
        {progress.phase === 4 ? (
          <form
            className={`progress-${progress.phase}`}
            onSubmit={(e) => {
              handleSubmit(fn)(e);
              setProgress({ phase: 5, nextPhase: null });
            }}
          >
            <h2>Tecnologias</h2>
            <div className="techslist">
              <ModalTechs register={register} />
            </div>
            <button type="submit">Finalizar</button>
          </form>
        ) : null}
        {progress.phase === 5 ? (
          <div className="RegisterCompleted">{onFinishing(resolved)}</div>
        ) : null}
      </div>
    </ModalContainer>
  );
};

export default ModalRegister;
