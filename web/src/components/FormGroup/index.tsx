import { FormProps } from "react-router-dom";

import { FormGroupProps, FormGroupsProps } from "./interface";
import {
  BaseStyledForm,
  BaseStyledFormGroup,
  BaseStyledFormGroups,
} from "./styled";

function Form(props: FormProps): JSX.Element {
  return <BaseStyledForm {...props} />;
}

function Group(props: FormGroupProps): JSX.Element {
  return <BaseStyledFormGroup {...props} />;
}

function Groups(props: FormGroupsProps): JSX.Element {
  return <BaseStyledFormGroups {...props} />;
}

Form.Group = Group;
Form.Groups = Groups;

export { Form };
