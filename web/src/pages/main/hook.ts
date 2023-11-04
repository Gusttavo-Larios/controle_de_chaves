import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

import {
  ConsultKeysUseCaseImpl,
  keys,
} from "app/application/use_case_impl/use_case_impl.consult_key";

import { IConsultKeysForm } from "./form_validator";

export function useMain() {
  const [keyList, setKeyList] = useState(keys);

  const consultKeysUseCaseImpl = new ConsultKeysUseCaseImpl();

  const onSubmit: SubmitHandler<IConsultKeysForm> = (data): void => {
    consultKeysUseCaseImpl.consult(data.roomName).then((response) => {
      setKeyList(response);
    });
  }

  return {
    keyList,
    onSubmit,
  };
}
