import { KeyEntity } from "app/core/entities/entity.key"

export interface UseKeyUseCase {
    useKey(id: KeyEntity['id']): Promise<void>;
}