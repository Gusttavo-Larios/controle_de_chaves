import { useContext } from "react"

import { MenuContext } from 'app/contexts/menu/context.menu'

export function useMenu() {

    const context = useContext(MenuContext)

    return {
        ...context
    }
}