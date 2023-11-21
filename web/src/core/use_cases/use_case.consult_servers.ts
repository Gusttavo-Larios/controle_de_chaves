import { ServerEntity } from "app/core/entities/entity.server.ts"

export interface ConsultServersUseCase {
    consult(server_name: string): Promise<Array<ServerEntity> | []>
}