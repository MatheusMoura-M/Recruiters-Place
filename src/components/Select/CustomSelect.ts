import styled from "styled-components";

const CustomSelect = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  select {
    width: 100%;
    border: 1px solid #14171a;
    border-radius: 8px;
    padding: 16.5px 14px;
    font-size: 16px;
    max-width: 300px;
  }
`;

export default CustomSelect;
