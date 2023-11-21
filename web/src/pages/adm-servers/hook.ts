import { useState, useEffect } from "react"
import { SubmitHandler } from "react-hook-form";

import { ConsultServersUseCaseImpl } from "app/application/use_case_impl/use_case_impl.consult_servers"

import { IConsultPublicAgentForm } from "./form_validator"

import { useAlert } from "app/hooks/alert/hook.alert";

export function userAdmServer() {
    const { openAlert } = useAlert()

    const [serversList, setServersList] = useState<Array<ServerEntity> | []>([])

    useEffect(() => {
        getServer()
    }, [])

    const consultServersUseCaseImpl = new ConsultServersUseCaseImpl()

    const onSubmit: SubmitHandler<IConsultPublicAgentForm> = (data) => {
        getServer(data.server_name)
    }

    async function getServer(server_name?: string): Promise<void> {
        try {
            const response = await consultServersUseCaseImpl.consult(server_name)
            setServersList(response)
        } catch (error: any) {
            openAlert({
                is_dialog: false,
                message: error.message,
                title: "Ocorreu um erro"
            })
        }
    }

    return {
        serversList,
        onSubmit
    }
}