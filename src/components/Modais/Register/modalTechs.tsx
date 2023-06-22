import devTechs from "../../../mockList/devTechs.json";
import { UseFormRegister } from "react-hook-form";
import { v4 as uuid } from "uuid";

interface iModalTechsProps {
  register: UseFormRegister<any>;
}

const ModalTechs = ({ register }: iModalTechsProps) => {
  return (
    <>
      {devTechs.map((el) => {
        return (
          <div key={uuid()}>
            <label htmlFor={el.tech} className="container">
              <input
                type="checkbox"
                id={el.tech}
                {...register(`tech.${el.tech}`)}
              />
              <span className={`checkmark tech-${el.tech}`}></span>
            </label>
          </div>
        );
      })}
    </>
  );
};

export default ModalTechs;
