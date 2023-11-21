import { ServerEntity } from "app/core/entities/entity.server";
import { DisableServerUseCase } from "app/core/use_cases/use_case.disable_server"

import { api } from "app/service";

export class DisableServerUseCaseImpl implements DisableServerUseCase {
    async disableServer(id: ServerEntity['id']): Promise<void> {
        try {
            await api.post(`/server/disable`, {
                server_id: id
            })

        } catch (error: any) {
            console.error(error)
            throw new Error(error.response.data?.message ?? error.message);
        }
    }
}