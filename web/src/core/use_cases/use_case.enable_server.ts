import { ServerEntity } from "../entities/entity.server";

export interface EnableServerUseCase {
    enableServer(id: ServerEntity['id']): Promise<void>
}