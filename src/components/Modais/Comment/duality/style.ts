import styled from "styled-components";

export const ModalComentContainer = styled.div`
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
  .closeDiv {
    position: absolute;
    top: 30px;
    right: 30px;
  }
  > div {
    position: absolute;
    max-width: 864px;
    width: 90%;
    height: 85vh;
    max-height: 600px;
    margin: 0 auto;
    padding: 30px 15px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    img {
      cursor: pointer;
    }
  }
`;
