import { KeyEntity } from "app/core/entities/entity.key"

export interface ReturnKeyUseCase {
    returnKey(id: KeyEntity['id']): Promise<void>;
}