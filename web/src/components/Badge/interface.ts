import { ComponentProps } from "react";
import { BaseStyledBadge } from "./styled";
import { DefaultTheme } from "styled-components";

export interface BadgeProps extends ComponentProps<typeof BaseStyledBadge> {}

export interface BaseStyledBadgeProps {
  variant?: BadgeVariantsType;
}

type BadgeVariantsType = keyof DefaultTheme["COLORS"];
