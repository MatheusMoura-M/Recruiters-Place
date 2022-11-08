import styled from "styled-components";

export const ModalChatContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10000;
  background: rgba(5, 2, 6, 0.8);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  > div {
    position: absolute;
    max-width: 864px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    padding: 30px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 10px;
  }
`;
export const ModalChatContainerButton = styled.div`
  align-self: end;
  width: 100%;
  display: flex;
  height: fit-content;
  img {
    cursor: pointer;
  }
  justify-content: space-between;
`;
export const ModalChatContainerMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-self: start;
  width: 100%;
  height: 45%;
`;
