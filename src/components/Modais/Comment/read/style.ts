import styled from "styled-components";

export const ModalComentReadContainer = styled.div`
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
    width: 90%;
    height: 85vh;
    max-height: 600px;
    margin: 0 auto;

    background-color: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 30px;

    gap: 15px;
  }
`;
export const ModalComentReadContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  height: fit-content;
  img {
    cursor: pointer;
  }
`;

export const ComentContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  overflow-y: auto;
  div img {
    width: 80px;
  }
  .float {
    position: absolute;
    right: 15px;
    img {
      cursor: pointer;
      margin: 0px 5px;
      width: 30px;
    }
  }

  li {
    position: relative;
    width: 100%;

    border: 2px solid #1da1f2;
    border-radius: 10px;

    display: flex;
    padding: 10px;
    gap: 20px;
    .avatar img {
      min-width: 80px;
    }
    p {
      display: flex;
      max-width: 650px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
