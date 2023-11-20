import { KeyEntity } from "app/core/entities/entity.key"

export interface ConsultKeysUseCase {
    consult(room_name: string): Promise<Array<KeyEntity> | []>;
}