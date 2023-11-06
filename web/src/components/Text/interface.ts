import { ComponentProps } from "react";
import { BaseStyledText } from "./styled";

export type TTextVariant = {
    variant: "TEXT_MEDIUM" | "TEXT_SMALL" | "TEXT_LARGE"
}

export interface TextProps extends ComponentProps<typeof BaseStyledText> {}
