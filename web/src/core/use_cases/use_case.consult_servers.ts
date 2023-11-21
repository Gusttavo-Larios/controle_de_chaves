import { ServerEntity } from "app/core/entities/entity.public_agent.ts"

export interface ConsultServersUseCase {
    consult(server_name: string): Promise<Array<ServerEntity> | []>
}