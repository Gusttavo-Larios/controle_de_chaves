import { useContext } from "react"

import { AlertContext } from 'app/contexts/modal/context.modal'

export function useAlert() {

    const context = useContext(AlertContext)

    return {
        ...context
    }
}