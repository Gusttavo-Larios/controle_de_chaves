import { LabelProps } from "./interface";
import { BaseStyledLabel } from "./styled";

function Label(props: LabelProps): JSX.Element {
  return <BaseStyledLabel {...props} />;
}

export { Label };
