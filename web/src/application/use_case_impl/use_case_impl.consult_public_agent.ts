import { PublicAgentEntity } from "app/core/entities/entity.public_agent"
import { ConsultPublicAgentUseCase } from "app/core/use_cases/use_case.consult_public_agent"

export const publicAgents: Array<PublicAgentEntity> = [
    {
        id: 0,
        name: "Cléber Feitosa",
        email: "cleber.ifmt@exemplo.com",
        identificationNumber: "2010",
        password: "12345"
    },
    {
        id: 1,
        name: "Daniel Alves",
        email: "daniel.ifmt@exemplo.com",
        identificationNumber: "2012",
        password: "12345"
    },
    {
        id: 2,
        name: "Denilson Botelho",
        email: "debilson.ifmt@exemplo.com",
        identificationNumber: "2013",
        password: "12345"
    }
]

export class ConsultPublicAgentUSeCaseImpl implements ConsultPublicAgentUseCase {
    async consult(params: { name?: string }): Promise<PublicAgentEntity[] | []> {
        const { name } = params

        if (name) return publicAgents.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))
        else return publicAgents
    }
}