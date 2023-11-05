import { useState } from "react"
import { SubmitHandler } from "react-hook-form";

import { ConsultPublicAgentUSeCaseImpl, publicAgents } from "app/application/use_case_impl/use_case_impl.consult_public_agent.ts"

import { IConsultPublicAgentForm } from "./form_validator"

export function usePublicAgent() {
    const [publicAgentList, setPublicAgentList] = useState(publicAgents)

    const consultPublicAgentUSeCaseImpl = new ConsultPublicAgentUSeCaseImpl()

    const onSubmit: SubmitHandler<IConsultPublicAgentForm> = (data) => {
        consultPublicAgentUSeCaseImpl.consult(data).then(response => {
            setPublicAgentList(response)
        })
    }

    return {
        publicAgentList,
        onSubmit
    }
}