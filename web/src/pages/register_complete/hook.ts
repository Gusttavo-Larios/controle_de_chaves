import { useState } from "react";
import { useLocation } from 'react-router-dom'
import { SubmitHandler } from "react-hook-form";

import {
  RegisterCompleteUseCaseImpl
} from "app/application/use_case_impl/use_case_impl.register_complete";

import { IRegisterCompleteForm } from "./form_validator";

export function useRegisterComplete() {
  const { state } = useLocation()

  const onSubmit: SubmitHandler<IRegisterCompleteForm> = async (data): Promise<void> => {
    const registerCompleteUseCaseImpl = new RegisterCompleteUseCaseImpl();

    await registerCompleteUseCaseImpl.createPassword({
      ...data,
      email: state.email
    })
  }

  return {
    onSubmit
  };
}
