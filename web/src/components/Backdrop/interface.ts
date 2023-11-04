import { ComponentProps } from "react"
import { BaseStyledBackdrop } from "./styled"

export type IBackdropStyled = {
    isVisible: boolean
}

export interface BackdropProps extends ComponentProps<typeof BaseStyledBackdrop> {}