import styled from "styled-components";

export const BoxBtns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  width: 100%;
  
  @media (max-width: 500px) {
    margin-top: 2rem;
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;

export const TechsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-top: 5rem;

  @media (max-width: 500px) {
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;

export const FormStyled = styled.form`
  min-height: 500px;
  height: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
