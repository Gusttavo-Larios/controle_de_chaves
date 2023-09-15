import { InputProps } from "./interface";
import { BaseStyledInput } from "./styled";

function Input(props: InputProps): JSX.Element {
  return <BaseStyledInput {...props} />;
}

export { Input };
