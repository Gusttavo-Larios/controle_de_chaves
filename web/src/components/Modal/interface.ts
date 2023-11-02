import { ComponentProps } from "react"
import { BaseStyledBackdrop } from "./styled"

export type TModalVariant = {
    is_visible: boolean
}

export interface ModalProps extends ComponentProps<typeof BaseStyledBackdrop> {}