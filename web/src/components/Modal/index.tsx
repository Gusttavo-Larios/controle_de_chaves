import { ModalProps } from "./interface";

import { BaseStyledBackdrop, BaseStyledModal } from "./styled";

export function Modal(props: ModalProps): JSX.Element {
    return <BaseStyledBackdrop isVisible={props.isVisible}>
        <BaseStyledModal>
            {props.children}
        </BaseStyledModal>
    </BaseStyledBackdrop>
}