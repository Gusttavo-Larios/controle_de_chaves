import { ServerEntity } from "app/core/entities/entity.server"
import { ConsultServersUseCase } from "app/core/use_cases/use_case.consult_servers"
import { api } from "app/service";

export class ConsultServersUseCaseImpl implements ConsultServersUseCase {
    async consult(server_name?: string): Promise<ServerEntity[] | []> {
        try {
            const response = await api.get(`/server${server_name ? `?server_name=${server_name}` : ''}`);

            return response.data;
          } catch (error: any) {
            console.error(error)
            throw new Error(error.message);
          }
    }
}