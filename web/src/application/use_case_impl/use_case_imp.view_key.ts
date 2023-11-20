import { KeyEntity } from "app/core/entities/entity.key";
import { ViewKeysUseCase } from "app/core/use_cases/use_case.view_key";
import { api } from "app/service";

export class ViewKeysUseCaseImpl implements ViewKeysUseCase {
  async view(id: KeyEntity['id']): Promise<KeyEntity | null> {
    try {
      const response = await api.get(`/key/${id}`);

      return response.data;
    } catch (error: any) {
      console.error(error)
      throw new Error(error.message);
    }
  }
}