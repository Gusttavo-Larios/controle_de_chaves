import { useState, useEffect } from "react"
import { SubmitHandler } from "react-hook-form";

import { ServerEntity } from "app/core/entities/entity.server";

import { ConsultServersUseCaseImpl } from "app/application/use_case_impl/use_case_impl.consult_servers"

import { useAlert } from "app/hooks/alert/hook.alert";

import { IConsultPublicAgentForm } from "./form_validator"
import { EnableServerUseCaseImpl } from "app/application/use_case_impl/use_case_impl.enable_server";
import { DisableServerUseCaseImpl } from "app/application/use_case_impl/use_case_impl.disable_server";
import { PreRegistrerServerUseCaseImpl } from "app/application/use_case_impl/use_case_impl.pre_registrer_server";

export function userAdmServer() {
    const { openAlert } = useAlert()

    const [serversList, setServersList] = useState<Array<ServerEntity> | []>([])

    useEffect(() => {
        getServer()
    }, [])

    const consultServersUseCaseImpl = new ConsultServersUseCaseImpl()
    const enableServerUseCaseImpl = new EnableServerUseCaseImpl();
    const disableServerUseCaseImpl = new DisableServerUseCaseImpl();
    const preRegistrerServerUseCaseImpl = new PreRegistrerServerUseCaseImpl();

    async function enableServer(id: ServerEntity['id']): Promise<void> {
        try {
            await enableServerUseCaseImpl.enableServer(id)
            getServer()
        } catch (error: any) {
            console.error(error)
            openAlert({
                is_dialog: false,
                message: error.message,
                title: "Ocorreu um erro"
            })
        }
    }

    async function disableServer(id: ServerEntity['id']): Promise<void> {
        try {
            await disableServerUseCaseImpl.disableServer(id)
            getServer()
        } catch (error: any) {
            openAlert({
                is_dialog: false,
                message: error.message,
                title: "Ocorreu um erro"
            })
        }
    }

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

    async function addServers(worksheet: File) {
        try {
            await preRegistrerServerUseCaseImpl.send(worksheet)
            getServer()
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
        onSubmit,
        enableServer,
        disableServer,
        addServers
    }
}