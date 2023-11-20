import { KeyEntity } from "app/core/entities/entity.key"

export interface DisableKeyUseCase {
    disableKey(id: KeyEntity['id']): Promise<void>;
}