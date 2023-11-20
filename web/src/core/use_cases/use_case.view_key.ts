import { KeyEntity } from "app/core/entities/entity.key"

export interface ViewKeysUseCase {
    view(id: KeyEntity['id']): Promise<KeyEntity | null>;
}