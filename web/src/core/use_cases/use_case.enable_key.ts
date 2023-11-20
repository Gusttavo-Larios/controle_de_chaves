import { KeyEntity } from "app/core/entities/entity.key"

export interface EnableKeyUseCase {
    enableKey(id: KeyEntity['id']): Promise<void>;
}