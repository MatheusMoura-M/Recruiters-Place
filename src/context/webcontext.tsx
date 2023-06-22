import {
  ReactNode,
  createContext,
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { Api } from "../services/api";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  iComment,
  iEditRech,
  iChat,
  iUserRegister,
  iUser,
  iSend,
  iUserLogin,
  iApiError,
  iFormEditProfile,
} from "../interface";
import { toast } from "react-toastify";
import techList from "../mockList/devTechs.json";
import { UseFormReset } from "react-hook-form";
import { AxiosError } from "axios";

export interface iWebProvider {
  children: ReactNode;
}

export interface iWebContext {
  loadUser(): Promise<void>;
  onLogin: (info: iUserLogin) => void;
  onRegister: (data: iUserRegister) => Promise<void>;
  resolved: boolean | undefined;
  setResolved: Dispatch<SetStateAction<boolean | undefined>>;
  editDataOfDevSubmit(formData: iFormEditProfile): Promise<void>;
  editRechSubmit: (
    info: iEditRech,
    reset: UseFormReset<iEditRech>
  ) => Promise<void>;
  setUser: Dispatch<SetStateAction<iUser | undefined>>;
  user: iUser | undefined;
  allUsers: iUser[] | undefined;
  modalFeed: boolean;
  modalComent: boolean;
  modalReadComent: boolean;
  readModalComent: () => void;
  setModalReadComent: React.Dispatch<React.SetStateAction<boolean>>;
  modalWriteComent: boolean;
  writeModalComent: () => void;
  setModalWriteComent: React.Dispatch<React.SetStateAction<boolean>>;
  comentId: string | undefined;
  setComentId: Dispatch<SetStateAction<string | undefined>>;
  onSubmitComent: (data: iComment) => void;
  boxEdit: boolean;
  setBoxEdit: React.Dispatch<React.SetStateAction<boolean>>;
  inputPassRef: React.MutableRefObject<undefined>;
  allComments: iComment[];
  setModalFeed: Dispatch<SetStateAction<boolean>>;
  setModalComent: React.Dispatch<React.SetStateAction<boolean>>;
  setModalChat: React.Dispatch<React.SetStateAction<boolean>>;
  modalChat: boolean;
  chatId: string | undefined;
  setChatId: Dispatch<SetStateAction<string | undefined>>;
  onSubmitChat: (data: iChat) => void;
  allChats: iChat[];
  callId: string | undefined;
  setCallId: Dispatch<SetStateAction<string | undefined>>;
  filteredTechs(elem: iUser): ({ tech: string; dir: string } | undefined)[];
  onSubmitSendChat: (data: iSend) => void;
  getAllUsers: () => void;
  getAllChats: () => void;
  filterDevelopers: iUser[] | undefined;
  setFilterDevelopers: React.Dispatch<
    React.SetStateAction<iUser[] | undefined>
  >;
  deleteComent: (s: string) => void;
  logOff: boolean;
  setLogOff: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: NavigateFunction;
}

export const WebContext = createContext<iWebContext>({} as iWebContext);

export function WebProvider({ children }: iWebProvider) {
  const [user, setUser] = useState<iUser>();
  const [allUsers, setAllUsers] = useState<iUser[] | undefined>();
  const [allComments, setAllComments] = useState<iComment[]>([]);
  const [allChats, setAllChats] = useState<iChat[]>([]);
  const [modalFeed, setModalFeed] = useState(false);
  const [modalComent, setModalComent] = useState(false);
  const [modalChat, setModalChat] = useState(false);
  const [modalReadComent, setModalReadComent] = useState(false);
  const [modalWriteComent, setModalWriteComent] = useState(false);
  const [comentId, setComentId] = useState<string>();
  const [chatId, setChatId] = useState<string>();
  const [callId, setCallId] = useState<string>();
  const [boxEdit, setBoxEdit] = useState(false);
  const [logOff, setLogOff] = useState(false);
  const [filterDevelopers, setFilterDevelopers] = useState<
    iUser[] | undefined
  >();
  const [resolved, setResolved] = useState<boolean | undefined>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const inputPassRef = useRef();

  useEffect(() => {
    loadUser();
    getAllUsers();
    getAllComments();
    // getAllChats();
  }, []);

  async function loadUser() {
    const token = localStorage.getItem("RPlace:Token");

    if (token) {
      try {
        const { data } = await Api.get("/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(data);
      } catch (error) {
        console.log(error);
        window.localStorage.clear();
      }
    }
  }

  async function getAllUsers() {
    const token = localStorage.getItem("RPlace:Token");

    if (token) {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;

        const { data } = await Api.get(`/user/`);
        setAllUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function getAllComments() {
    const token = localStorage.getItem("RPlace:Token");

    if (token) {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await Api.get(`/comments`);

        setAllComments(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function getAllChats() {
    const token = localStorage.getItem("RPlace:Token");

    if (token) {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await Api.get(`/chat`);

        setAllChats(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function onLogin(info: iUserLogin) {
    try {
      setLoading(true);
      const { data } = await Api.post("/login", info);

      if (data) {
        localStorage.setItem("RPlace:Token", data.accessToken);
        localStorage.setItem("RPlace:id", data.user.id);

        getAllComments();
        setUser(data.user);
        setLoading(false);

        data.user.isRecruiter ? navigate("/home") : navigate("/perfil");
      }
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      toast.error("Ops, algo deu errado.");

      return false;
    }
  }

  async function onRegister(data: iUserRegister): Promise<void> {
    const { isRecruiter } = data;
    if (!isRecruiter) {
      const devData = {
        name: data.name,
        email: data.email,
        password: data.password,
        isRecruiter: data.isRecruiter,
        city: data.city === "" ? null : data.city,
        schooling: data.schooling === "" ? null : data.schooling,
        vacancy: data.vacancy === "" ? null : data.vacancy,
        isWork: data.isWork,
        linkedin: data.linkedin === "" ? null : data.linkedin,
        github: data.github === "" ? null : data.github,
        portfolio: data.portfolio === "" ? null : data.portfolio,
        tech: data.tech,
      };

      try {
        await Api.post("/user", devData);
        setResolved(true);
      } catch (error) {
        console.log(error);
        setResolved(false);
      }
    } else {
      const recruiterData = {
        name: data.name,
        email: data.email,
        password: data.password,
        isRecruiter: data.isRecruiter,
      };

      try {
        await Api.post("/user", recruiterData);
        setResolved(true);
      } catch (error) {
        console.log(error);
        setResolved(false);
      }
    }
  }

  async function editDataOfDevSubmit(formData: iFormEditProfile) {
    try {
      const { data } = await Api.patch<iUser>(`/user`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("RPlace:Token")}`,
        },
      });

      setUser(data);
      getAllUsers();
      setFilterDevelopers(
        allUsers?.filter((elem: iUser) => elem.isRecruiter === false)
      );
      toast.success("Informações atualizadas!");
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.error(requestError.response?.data.error);
    }
  }

  async function editRechSubmit(
    info: iEditRech,
    reset: UseFormReset<iEditRech>
  ) {
    const id = localStorage.getItem("RPlace:id");
    const token = localStorage.getItem("RPlace:Token");

    if (info.password === "") {
      delete info.password;
    }

    if (
      user?.name !== info.name ||
      user?.city !== info.city ||
      user?.email !== info.email ||
      user?.empresa !== info.empresa ||
      info.password
    ) {
      if (token) {
        try {
          Api.defaults.headers.authorization = `Bearer ${token}`;

          await Api.patch("/user", info, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("RPlace:Token")}`,
            },
          });

          setUser({ ...user, ...info, tech: {} });
          setBoxEdit(false);

          toast.success("Usuário editado com sucesso");
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      toast.warning("Nenhum campo foi alterado");
    }
    reset({
      name: user?.name,
      city: user?.city,
      email: user?.email,
      password: "",
      empresa: user?.empresa,
      linkedin: user?.linkedin,
    });
  }

  function writeModalComent(): void {
    setModalComent(!modalComent);
    setModalWriteComent(true);
  }

  function readModalComent(): void {
    setModalComent(!modalComent);
    setModalReadComent(true);
  }

  async function onSubmitComent(data: iComment) {
    data.idTo = comentId;
    data.idFrom = String(user?.id);

    const token = localStorage.getItem("RPlace:Token");

    if (token) {
      try {
        setLoading(true);
        Api.defaults.headers.authorization = `Bearer ${token}`;
        await Api.post(`/comments`, data);

        getAllComments();
        setModalWriteComent(false);
        setLoading(false);
        toast.success("Comentário enviado.");
      } catch (error) {
        console.log(error);
      }
    }
    setAllComments([...allComments]);
  }

  async function deleteComent(event: string) {
    const token = localStorage.getItem("RPlace:Token");

    if (token) {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        await Api.delete(`/comments/${event}`);
        getAllComments();
        toast.success("Comentário apagado.");
      } catch (error) {
        console.log(error);
      }
    }
    setAllComments([...allComments]);
  }

  async function onSubmitChat(data: iChat) {
    data.idTo = chatId;
    data.idFrom = String(user?.id);
    data.isRead = false;

    const token = localStorage.getItem("RPlace:Token");

    if (token) {
      try {
        setLoading(true);
        Api.defaults.headers.authorization = `Bearer ${token}`;
        await Api.post(`/chat`, data);

        setAllChats([...allChats, data]);
        setModalChat(false);
        setLoading(false);
        toast.success("Mensagem enviada.");
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function onSubmitSendChat(data: iSend) {
    data.idTo = callId;
    const findTo = allChats.find((element) => element.idTo === callId);
    data.idFrom = String(user?.id);
    data.from = user?.name;
    data.to = findTo?.to;
    data.isRead = false;

    const token = localStorage.getItem("RPlace:Token");

    if (token) {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        await Api.post(`/chat`, data);

        setAllChats([...allChats, data]);
      } catch (error) {
        console.log(error);
      }
    }
  }

  function filteredTechs(elem: iUser) {
    const separateTechs = Object.entries<boolean>(
      elem.tech as { [s: string]: boolean } | ArrayLike<boolean>
    );
    const filterTechs = separateTechs.filter((elem) => {
      return elem[1] === true;
    });

    const arrFilteredTechs = filterTechs.map((elem) => {
      return techList.find((E) => elem[0] === E.tech);
    });
    return arrFilteredTechs;
  }

  return (
    <WebContext.Provider
      value={{
        onLogin,
        onRegister,
        resolved,
        setResolved,
        editRechSubmit,
        setUser,
        user,
        allUsers,
        modalFeed,
        setModalFeed,
        modalComent,
        setModalComent,
        readModalComent,
        modalReadComent,
        setModalReadComent,
        modalWriteComent,
        writeModalComent,
        setModalWriteComent,
        comentId,
        setComentId,
        onSubmitComent,
        boxEdit,
        setBoxEdit,
        inputPassRef,
        allComments,
        setModalChat,
        modalChat,
        chatId,
        setChatId,
        onSubmitChat,
        allChats,
        callId,
        setCallId,
        filteredTechs,
        onSubmitSendChat,
        getAllUsers,
        getAllChats,
        filterDevelopers,
        setFilterDevelopers,
        deleteComent,
        logOff,
        setLogOff,
        loading,
        setLoading,
        navigate,
        editDataOfDevSubmit,
        loadUser,
      }}
    >
      {children}
    </WebContext.Provider>
  );
}

export const useAuth = () => useContext(WebContext);
