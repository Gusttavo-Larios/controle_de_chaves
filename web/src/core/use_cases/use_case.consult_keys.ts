import {KeyEntity} from "app/core/entities/entity.key"

export interface ConsultKeysUseCase {
    consult(key_name: string): Array<KeyEntity> | [];
}