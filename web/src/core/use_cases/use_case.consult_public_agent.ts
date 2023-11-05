import { PublicAgentEntity } from "app/core/entities/entity.public_agent.ts"

export interface ConsultPublicAgentUseCase {
    consult(params: {name?: string}): Promise<Array<PublicAgentEntity> | []>
}