import { BoxForm } from "./style";

import { useState } from "react";
import { FormTechOfDev } from "./FormTechOfDev";
import { FormDataOfDev } from "./FormDataOfDev";
import { LogOffModal } from "../../../components/LogOfff";

export const FormEditProfile = () => {
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <>
      <BoxForm step={step}>
        {step === 1 ? (
          <FormDataOfDev setStep={setStep} />
        ) : (
          <FormTechOfDev setStep={setStep} />
        )}
      </BoxForm>
      <LogOffModal />
    </>
  );
};
