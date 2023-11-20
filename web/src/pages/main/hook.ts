import { useState, useEffect } from "react";
import { SubmitHandler } from "react-hook-form";

import { KeyEntity } from "app/core/entities/entity.key";
import {
  ConsultKeysUseCaseImpl
} from "app/application/use_case_impl/use_case_impl.consult_key";


import { IConsultKeysForm } from "./form_validator";

export function useMain() {
  const [keyList, setKeyList] = useState<KeyEntity[] | []>([]);

  const consultKeysUseCaseImpl = new ConsultKeysUseCaseImpl();

  useEffect(() => {
    consultKeysUseCaseImpl.consult().then((response) => {
      setKeyList(response);
    });
  }, [])

  const onSubmit: SubmitHandler<IConsultKeysForm> = (data): void => {
    consultKeysUseCaseImpl.consult(data.room_name).then((response) => {
      setKeyList(response);
    });
  }

  return {
    keyList,
    onSubmit,
  };
}
