import styled from "styled-components";

import { IBackdropStyled } from "./interface";

export const BaseStyledBackdrop = styled.div<IBackdropStyled>`
    position: fixed;
    top: 0;
    right: 0; 
    bottom: 0;
    left: 0;
    background-color: rgb(38, 33, 31, 0.8);
    z-index: 10;

    display: ${props => props.isVisible ? "flex" : "none"};
    align-items: center;
    justify-content: center;
`;