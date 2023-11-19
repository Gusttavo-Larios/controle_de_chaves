import { KeyEntity } from "app/core/entities/entity.key";
import { ConsultKeysUseCase } from "app/core/use_cases/use_case.consult_keys";
import { api } from "app/service";

export class ConsultKeysUseCaseImpl implements ConsultKeysUseCase {
  async consult(roomName: string): Promise<Array<KeyEntity> | []> {
    try {
      const response = await api.get(`/key${roomName ? `?roomName=${roomName}` : ''}`);

      return response.data;
    } catch (error: any) {
      console.error(error)
      throw new Error(error.message);
    }
  }
}
