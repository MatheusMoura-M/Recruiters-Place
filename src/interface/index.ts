import {
  Path,
  UseFormGetValues,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";

export interface iChat {
  from: string | undefined;
  to: string | undefined;
  idTo: string | undefined;
  idFrom: string | undefined;
  chat: string | undefined;
  isRead: boolean | undefined;
}

export interface iComment {
  from: string | undefined;
  to: string | undefined;
  idTo: string | undefined;
  idFrom: string | undefined;
  coment: string | undefined;
  id: number;
}

export interface iSend {
  chat: string | undefined;
  from: string | undefined;
  idFrom: string | undefined;
  isRead: boolean | undefined;
  idTo: string | undefined;
  to: string | undefined;
}

export interface iUserRegister {
  name: string;
  email: string;
  city?: string;
  schooling?: string;
  vacancy?: string;
  password: string;
  checkpass: string;
  isRecruiter: boolean;
  isWork?: boolean;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  tech?: {
    html: boolean;
    css: boolean;
    js: boolean;
    react: boolean;
    ts: boolean;
    angular: boolean;
    vuejs: boolean;
    php: boolean;
    c: boolean;
  };
}

export interface iProgressProps {
  phase: number;
  nextPhase: number | null;
}

export interface iInputProps {
  default?: string;
  errorMessage?: string;
  errors?: any;
  getValues: UseFormGetValues<any>;
  id: Path<any>;
  label: string;
  login?: boolean;
  name?: string;
  register: UseFormRegister<any>;
  type: string;
  showPass?: boolean;
  defaultValue?: string;
}

export interface iEditRech {
  email: string;
  empresa: string;
  linkedin: string;
  city: string;
  name: string;
  password: string | undefined;
  reset: UseFormReset<iEditRech>;
}

export interface iUser {
  id?: number;
  email: string;
  name: string;
  isRecruiter?: boolean;
  city: string | undefined;
  schooling?: string | undefined;
  vacancy?: string | undefined;
  empresa: string | undefined;
  isWork?: boolean | undefined;
  linkedin: string | undefined;
  github?: string | undefined;
  portfolio?: string | undefined;
  bio?: string | undefined;
  fotoDoPerfil?: string;
  tech: {
    html?: boolean | undefined;
    css?: boolean | undefined;
    js?: boolean | undefined;
    react?: boolean | undefined;
    ts?: boolean | undefined;
    angular?: boolean | undefined;
    vuejs?: boolean | undefined;
    php?: boolean | undefined;
    c?: boolean | undefined;
    sass?: boolean | undefined;
    node?: boolean | undefined;
  };
}

export interface iUserLogin {
  email: string;
  password: string;
}

export interface iTech {
  tech: string;
  dir: string;
}

export interface iTechs {
  id?: string;
  html?: boolean;
  css?: boolean;
  js?: boolean;
  react?: boolean;
  ts?: boolean;
  angular?: boolean;
  vuejs?: boolean;
  php?: boolean;
  c?: boolean;
  sass?: boolean;
  node?: boolean;
}

export interface iFormEditProfile {
  bio: string;
  name: string;
  email: string;
  password: string;
  isRecruiter: true;
  city: string;
  schooling: string;
  vacancy: string;
  isWork: boolean;
  linkedin: string;
  github: string;
  portfolio: string;
  tech?: iTechs;
  fotoDoPerfil: string;
}

export interface iApiError {
  error: string;
}
