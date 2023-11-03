import { ComponentProps } from "react"
import { BaseStyledBackdrop } from "./styled"

export type TModalVariant = {
    isVisible: boolean
}

export interface ModalProps extends ComponentProps<typeof BaseStyledBackdrop> {}