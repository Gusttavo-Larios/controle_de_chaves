import styled, {css} from "styled-components";
import { BaseStyledButtonProps } from "./interface";

const buttonDisabled = css`
  background-color: ${props => props.theme.COLORS.GRAY_300};

  cursor: not-allowed;

  &:hover {
    opacity: 1;
  }
`;

export const BaseStyledButton = styled.button<BaseStyledButtonProps>`
  /* LAYOUT */
  display: inline-flex;
  height: 4.4rem;
  padding: 1.2rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;  

  /* STYLE */
  border-radius: 1.6rem;
  background: ${(props) =>
    props.variant
      ? props.theme.COLORS[props.variant]
      : props.theme.COLORS.BLUE_300};

  color: ${(props) => props.theme.COLORS.WHITE_100};
  ${(props) => props.theme.TEXTS.BUTTON_TEXT};

  &:hover {
    opacity: 0.8;
  }

 ${props => props.disabled && buttonDisabled}
`;
