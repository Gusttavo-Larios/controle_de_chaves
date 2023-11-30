import { useState, useEffect } from "react";
import { SubmitHandler } from "react-hook-form";

import { KeyEntity } from "app/core/entities/entity.key";

import {
  ConsultKeysUseCaseImpl
} from "app/application/use_case_impl/use_case_impl.consult_key";
import {
  EnableKeyUseCaseImpl
} from "app/application/use_case_impl/use_case_impl.enable_key";
import {
  DisableKeyUseCaseImpl
} from "app/application/use_case_impl/use_case_impl.disable_key";
import { PreRegistrerKeyUseCaseImpl } from "app/application/use_case_impl/use_case_impl.pre_registrer_key";

import { IConsultKeysForm } from "./form_validator";

import { useAlert } from "app/hooks/alert/hook.alert";

export function useAdmKey() {
  const { openAlert } = useAlert()

  const [keyList, setKeyList] = useState<KeyEntity[] | []>([]);

  const consultKeysUseCaseImpl = new ConsultKeysUseCaseImpl();
  const enableKeyUseCaseImpl = new EnableKeyUseCaseImpl();
  const disableKeyUseCaseImpl = new DisableKeyUseCaseImpl();
  const preRegistrerKeyUseCaseImpl = new PreRegistrerKeyUseCaseImpl();

  useEffect(() => {
    getKeys()
  }, [])

  async function getKeys() {
    try {
      const response = await consultKeysUseCaseImpl.consult()
      setKeyList(response);
    } catch (error: any) {
      console.error(error)
      openAlert({
        is_dialog: false,
        message: error.message,
        title: "Ocorreu um erro"
      })
    }
  }

  async function enableKey(id: KeyEntity['id']): Promise<void> {
    try {
      enableKeyUseCaseImpl.enableKey(id)
      getKeys()
    } catch (error: any) {
      console.error(error)
      openAlert({
        is_dialog: false,
        message: error.message,
        title: "Ocorreu um erro"
      })
    }
  }

  async function disableKey(id: KeyEntity['id']): Promise<void> {
    try {
      disableKeyUseCaseImpl.disableKey(id)
      getKeys()
    } catch (error: any) {
      openAlert({
        is_dialog: false,
        message: error.message,
        title: "Ocorreu um erro"
      })
    }
  }

  const onSubmit: SubmitHandler<IConsultKeysForm> = (data): void => {
    consultKeysUseCaseImpl.consult(data.room_name).then((response) => {
      setKeyList(response);
    });
  }

  async function addKeys(worksheet: File) {
    try {
      await preRegistrerKeyUseCaseImpl.send(worksheet)
      getKeys()
    } catch (error: any) {
      openAlert({
        is_dialog: false,
        message: error.message,
        title: "Ocorreu um erro"
      })
    }
  }

  return {
    keyList,
    enableKey,
    disableKey,
    onSubmit,
    addKeys
  };
}
