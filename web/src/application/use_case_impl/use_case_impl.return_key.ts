import { KeyEntity } from "app/core/entities/entity.key";
import { ReturnKeyUseCase } from "app/core/use_cases/use_case.return_key";
import { api } from "app/service";

export class ReturnKeyUseCaseImpl implements ReturnKeyUseCase {
  async returnKey(id: KeyEntity['id']): Promise<void> {
    try {
      /*const response : Promise<HistoricEntity> = */
      await api.post(`/key/return`, {
        key_id: id
      })
    } catch (error: any) {
      console.error(error)
      throw new Error(error.message);
    }
  }
}
