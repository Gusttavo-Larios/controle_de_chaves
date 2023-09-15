import { ComponentProps } from "react";
import { BaseStyledButton } from "./styled";
import { DefaultTheme } from "styled-components";

export interface ButtonProps extends ComponentProps<typeof BaseStyledButton> {}

export interface BaseStyledButtonProps {
  variant?: ButtonVariantsType;
}

type ButtonVariantsType = keyof DefaultTheme["COLORS"];
