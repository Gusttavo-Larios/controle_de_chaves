import { ModalProps } from "./interface";

import { BaseStyledBackdrop, BaseStyledModal } from "./styled";

export function Modal(props: ModalProps): JSX.Element {
    return <BaseStyledBackdrop is_visible={props.is_visible}>
        <BaseStyledModal>
            {props.children}
        </BaseStyledModal>
    </BaseStyledBackdrop>
}