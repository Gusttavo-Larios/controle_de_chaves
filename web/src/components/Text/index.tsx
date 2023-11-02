import { TextProps } from "./interface";
import { BaseStyledText } from "./styled";

export function Text(props: TextProps): JSX.Element {
    return <BaseStyledText {...props} />
}