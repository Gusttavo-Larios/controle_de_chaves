import { KeyEntity } from "app/core/entities/entity.key";
import { EnableKeyUseCase } from "app/core/use_cases/use_case.enable_key";
import { api } from "app/service";

export class EnableKeyUseCaseImpl implements EnableKeyUseCase {
  async enableKey(id: KeyEntity['id']): Promise<void> {
    try {
      await api.post(`/key/enable`, {
        key_id: id
      })

    } catch (error: any) {
      console.error(error)
      throw new Error(error.response.data?.message ?? error.message);
    }
  }
}
