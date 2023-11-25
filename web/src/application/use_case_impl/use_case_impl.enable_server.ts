import { ServerEntity } from "app/core/entities/entity.server";
import { EnableServerUseCase } from "app/core/use_cases/use_case.enable_server"

import { api } from "app/service";

export class EnableServerUseCaseImpl implements EnableServerUseCase {
    async enableServer(id: ServerEntity['id']): Promise<void> {
        try {
            await api.post(`/server/enable`, {
                server_id: id
            })

        } catch (error: any) {
            console.error(error)
            throw new Error(error.response.data?.message ?? error.message);
        }
    }
}