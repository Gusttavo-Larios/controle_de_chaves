import { ViewKeysUseCaseImpl } from "app/application/use_case_impl/use_case_imp.view_key";
import { ReturnKeyUseCaseImpl } from "app/application/use_case_impl/use_case_impl.return_key";
import { UseKeyUseCaseImpl } from "app/application/use_case_impl/use_case_impl.use_key";
import { HistoricEntity } from "app/core/entities/entity.historic";
import { KeyEntity } from "app/core/entities/entity.key";
import { useAlert } from "app/hooks/alert/hook.alert";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useKeyDetails() {
    let { id } = useParams();
    const { openAlert } = useAlert()

    const [key, setKey] = useState<KeyEntity | null>()

    useEffect(() => {
        getKey()
    }, [])

    const server = JSON.parse(sessionStorage.getItem("@server") as string);
    const historics: HistoricEntity[] = key?.historics ?? [];
    const lastUsageKey: HistoricEntity = historics[historics.length - 1];

    const enableReturnKeyButton = key?.key_status?.status === "Indisponível" && lastUsageKey?.server_id === server.id

    const viewKeysUseCaseImpl = new ViewKeysUseCaseImpl()
    const useKeyUseCaseImpl = new UseKeyUseCaseImpl()
    const returnKeyUseCaseImpl = new ReturnKeyUseCaseImpl()

    function getKey(): void {
        viewKeysUseCaseImpl.view(id as unknown as number).then(response => {
            setKey(response)
        })
    }

    async function useKey() {
        try {
            await useKeyUseCaseImpl.useKey(key?.id as number)
            getKey()
        } catch (error: any) {
            openAlert({
                is_dialog: false,
                message: error.message,
                title: "Ocorreu um erro"
            })
        }
    }

    async function returnKey() {
        try {
            await returnKeyUseCaseImpl.returnKey(key?.id as number)
            getKey()
        } catch (error: any) {
            openAlert({
                is_dialog: false,
                message: error.message,
                title: "Ocorreu um erro"
            })
        }
    }

    return {
        key,
        enableReturnKeyButton,
        useKey,
        returnKey
    }
}