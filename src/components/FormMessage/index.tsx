import { useForm } from "react-hook-form";
import { ButtonStylized } from "../Buttons/style";
import { FormContainer } from "./style";
import { iComment, iUser } from "../../interface";
import { useAuth } from "../../context/webcontext";

function FormMessage() {
  const { onSubmitComent, user, comentId, allUsers, loading } = useAuth();

  const { register, handleSubmit } = useForm<iComment>({});

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitComent)}>
      <div>
        <h3>De: </h3>
        <input type="text" value={user?.name} {...register("from")} />
      </div>
      <div>
        <h3>Para:</h3>
        <input
          type="text"
          value={allUsers?.reduce((acc, act: iUser) => {
            if (act.id === Number(comentId)) {
              return acc + act.name;
            } else {
              return acc + "";
            }
          }, "")}
          {...register("to")}
        />
      </div>
      <textarea id="" {...register("coment")}></textarea>
      <ButtonStylized styled="align-end" type="submit">
        {!loading && <>Enviar</>}
        {loading && (
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </ButtonStylized>
    </FormContainer>
  );
}

export default FormMessage;
