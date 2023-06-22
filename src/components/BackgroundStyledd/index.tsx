import {
  BackgroundStyled,
  SloganBackground,
  TextBackground,
  TitleBackground,
} from "./style";

function Slogan() {
  return (
    <BackgroundStyled>
      <SloganBackground>Recrutamento em um só lugar</SloganBackground>
      <TitleBackground>Agilize o trabalho com parceiros</TitleBackground>
      <TextBackground>Confira os benefícios ➡</TextBackground>
    </BackgroundStyled>
  );
}

export default Slogan;
