import CustomSelect from "./customSelect";
import { ListSchooling, ListMock } from "../../mockList/devType";
import { v4 as uuid } from "uuid";
import { iInputProps } from "../../interface";
import { useState } from "react";

type SelectProps = Omit<
  iInputProps,
  "type" | "errorMessage" | "login" | "default" | "name"
>;

const Select = ({ errors, getValues, id, label, register }: SelectProps) => {
  const { onChange, onBlur, name, ref } = register(id);

  const selectValue = getValues(id) ? getValues(id) : "";
  const [value, setValue] = useState(selectValue);

  //functions
  const selectOptions = () => {
    if (id === "schooling") {
      return (
        <>
          <option value=""></option>
          {ListSchooling.map((el) => {
            return (
              <option key={uuid()} value={el}>
                {el}
              </option>
            );
          })}
        </>
      );
    } else if (id === "vacancy") {
      return (
        <>
          <option value=""></option>
          {ListMock.map((el) => {
            return (
              <option key={uuid()} value={el}>
                {el}
              </option>
            );
          })}
        </>
      );
    }
  };

  return (
    <CustomSelect>
      <label htmlFor={id}>
        {id === "schooling" ? "Escolaridade" : "Cargo"}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e);
        }}
        onBlur={onBlur}
        name={name}
        ref={ref}
      >
        {selectOptions()}
      </select>
    </CustomSelect>
  );
};

export default Select;
