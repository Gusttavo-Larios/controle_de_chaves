import { ComponentProps } from "react";
import { BaseStyledForm, BaseStyledFormGroup, BaseStyledFormGroups } from "./styled";

export interface FormProps extends ComponentProps<typeof BaseStyledForm>{}

export interface FormGroupProps extends ComponentProps<typeof BaseStyledFormGroup>{}

export interface FormGroupsProps extends ComponentProps<typeof BaseStyledFormGroups>{}