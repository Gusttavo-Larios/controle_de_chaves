import styled, { css } from "styled-components";

const hasFile = css`
    /* border: 1px solid ${props => props.theme.COLORS.GREEN_300}; */
   * {
       color: ${props => props.theme.COLORS.RED_100};
   } 
`;

export const StyledDropzoneArea = styled.div`
    min-width: 25.6rem;
    min-height: 11.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 3rem;
    background-color: ${props => props.theme.COLORS.WHITE_200};
    
    overflow: hidden;

    ${props => props.theme.TEXTS.PLACEHOLDER};
    ${props => props.hasFile && hasFile};
`;