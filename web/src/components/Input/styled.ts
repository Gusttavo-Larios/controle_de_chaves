import styled from "styled-components";

export const BaseStyledInput = styled.input`
  height: 4.4rem;
  padding: 0.8rem 1.2rem;

  border-radius: 1.6rem;
  border: 1px solid ${(props) => props.theme.COLORS.BLACK_600};
  background-color: ${(props) => props.theme.COLORS.WHITE_200};
  ${(props) => props.theme.TEXTS.TEXT_SMALL}

  &::placeholder {
    ${(props) => props.theme.TEXTS.PLACEHOLDER}
  }
`;
