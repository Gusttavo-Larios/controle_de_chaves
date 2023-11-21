import { ServerEntity } from "../entities/entity.server";

export interface DisableServerUseCase {
    disableServer(id: ServerEntity['id']): Promise<void>
}