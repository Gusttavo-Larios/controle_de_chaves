import { useState } from "react";

import {
  ConsultKeysUseCaseImpl,
  keys,
} from "app/application/use_case_impl/use_case_impl.consult_key";

import { mainFormRules, TMainForm } from "./form_validator.main";

export function useMain() {
  const [keyList, setKeyList] = useState(keys);

  const consultKeysUseCaseImpl = new ConsultKeysUseCaseImpl();

  function onSubmit(data: SubmitHandler<TMainForm>): void {
    consultKeysUseCaseImpl.consult(data.room_name).then((response) => {
      setKeyList(response);
    });
  }

  return {
    keyList,
    onSubmit,
  };
}
