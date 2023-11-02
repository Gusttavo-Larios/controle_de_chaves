import styled from "styled-components";
import { TTextVariant } from "./interface";

export const BaseStyledText= styled.p<TTextVariant>`
    ${props => props.theme.TEXTS[props.variant]}
`;