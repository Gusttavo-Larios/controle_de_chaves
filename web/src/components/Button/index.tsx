import { ButtonProps } from "./interface";
import { BaseStyledButton } from "./styled";

function Button(props: ButtonProps): JSX.Element {
  return <BaseStyledButton {...props} />;
}

export { Button };
