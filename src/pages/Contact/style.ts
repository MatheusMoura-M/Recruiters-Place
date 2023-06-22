import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ContainerFormContact = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 30%;
  align-items: center;
  textarea {
    max-width: 300px;
    height: 100px;
    width: 100%;
  }
`;
