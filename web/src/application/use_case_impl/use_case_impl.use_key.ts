import { KeyEntity } from "app/core/entities/entity.key";
import { UseKeyUseCase } from "app/core/use_cases/use_case.use_key";
import { api } from "app/service";

export class UseKeyUseCaseImpl implements UseKeyUseCase {
  async useKey(id: KeyEntity['id']): Promise<void> {
    try {
      /*const response : Promise<HistoricEntity> = */
      await api.post(`/key/use`, {
        key_id: id
      })
    } catch (error: any) {
      console.error(error)
      throw new Error(error.response.data?.message ?? error.message);
    }
  }
}
