import { ComponentProps } from "react";
import { BaseStyledText } from "./styled";

export type TTextVariant = {
    variant: "TEXT_MEDIUM" | "TEXT_SMALL"
}

export interface TextProps extends ComponentProps<typeof BaseStyledText> {}
