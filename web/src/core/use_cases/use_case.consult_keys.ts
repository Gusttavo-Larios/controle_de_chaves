import {KeyEntity} from "app/core/entities/entity.key"

export interface ConsultKeysUseCase {
    consult(roomName: string): Array<KeyEntity> | [];
}