import { ModalProps } from "./interface";

import { BaseStyledBackdrop } from "./styled";

export function Backdrop(props: ModalProps): JSX.Element {
    return <BaseStyledBackdrop {...props}/>;
}