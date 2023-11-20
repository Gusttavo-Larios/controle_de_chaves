import { KeyEntity } from "app/core/entities/entity.key";
import { DisableKeyUseCase } from "app/core/use_cases/use_case.disable_key";
import { api } from "app/service";

export class DisableKeyUseCaseImpl implements DisableKeyUseCase {
  async disableKey(id: KeyEntity['id']): Promise<void> {
    try {
      await api.post(`/key/disable`, {
        key_id: id
      })

    } catch (error: any) {
      console.error(error)
      throw new Error(error.response.data?.message ?? error.message);
    }
  }
}
