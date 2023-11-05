import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

import {
  RegisterCompleteUseCaseImpl
} from "app/application/use_case_impl/use_case_impl.register_complete";

import { IRegisterCompleteForm } from "./form_validator";

export function useRegisterComplete() {

  const onSubmit: SubmitHandler<IRegisterCompleteForm> = async (data): Promise<void> => {
    const registerCompleteUseCaseImpl = new RegisterCompleteUseCaseImpl();

    await registerCompleteUseCaseImpl.createPassword(data)
  }

  return {
    onSubmit
  };
}
