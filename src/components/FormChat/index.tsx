import { useForm } from "react-hook-form";
import { ButtonStylized } from "../Buttons/style";
import { FormChatContainer } from "./style";
import { iChat, iUser } from "../../interface";
import { useAuth } from "../../context/webcontext";

function FormChat() {
  const { user, chatId, allUsers, onSubmitChat, loading } = useAuth();

  const { register, handleSubmit } = useForm<iChat>({});

  return (
    <FormChatContainer onSubmit={handleSubmit(onSubmitChat)}>
      <div>
        <h3>De: </h3>
        <input type="text" value={user?.name} {...register("from")} />
      </div>
      <div>
        <h3>Para:</h3>
        <input
          type="text"
          value={allUsers?.reduce((acc, act: iUser) => {
            if (act.id === Number(chatId)) {
              return acc + act.name;
            } else {
              return acc + "";
            }
          }, "")}
          {...register("to")}
        />
      </div>
      <textarea id="" {...register("chat")}></textarea>
      <ButtonStylized type="submit" styled="align-end">
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
    </FormChatContainer>
  );
}

export default FormChat;
