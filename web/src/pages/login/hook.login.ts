import { SubmitHandler } from "react-hook-form";

import { TLoginForm } from "./form_validator.user";

import { LoginUseCaseImpl } from "app/application/use_case_impl/use_case_impl.login";
import { useContext } from "react";
import { AlertContext } from "app/contexts/modal/context.modal";

export function useLogin() {
  const { openAlert } = useContext(AlertContext)
  const loginUseCaseImpl = new LoginUseCaseImpl();

  const onSubmit: SubmitHandler<TLoginForm> = async (data) => {
    try {
      console.log(data)
      await loginUseCaseImpl.authenticate(data);
    } catch (error: any) {
      console.log(error)

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
