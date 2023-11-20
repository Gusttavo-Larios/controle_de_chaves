import { ViewKeysUseCaseImpl } from "app/application/use_case_impl/use_case_imp.view_key";
import { KeyEntity } from "app/core/entities/entity.key";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useKeyDetails() {
    let { id } = useParams();

    const [key, setKey] = useState<KeyEntity | null>()

    useEffect(() => {
        getKey()
    }, [])

    const viewKeysUseCaseImpl = new ViewKeysUseCaseImpl()

    function getKey(): void {
        viewKeysUseCaseImpl.view(id as unknown as number).then(response => {
            setKey(response)
        })
    }
    return {
        key
    }
}