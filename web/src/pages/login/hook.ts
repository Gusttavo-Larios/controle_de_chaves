import { useContext } from "react";
import { SubmitHandler } from "react-hook-form";

import { IAuthenticateForm } from "./form_validator";

import { LoginUseCaseImpl } from "app/application/use_case_impl/use_case_impl.login";
import { AlertContext } from "app/contexts/modal/context.modal";

export function useLogin() {
  const { openAlert } = useContext(AlertContext)
  const loginUseCaseImpl = new LoginUseCaseImpl();

  const onSubmit: SubmitHandler<IAuthenticateForm> = async (data) => {
    try {
      await loginUseCaseImpl.authenticate(data);
    } catch (error: any) {
      openAlert({
        is_dialog: false,
        message: error.message,
        title: "Ocorreu um erro"
      })
    }
  }

  return {
    onSubmit,
  };
}
