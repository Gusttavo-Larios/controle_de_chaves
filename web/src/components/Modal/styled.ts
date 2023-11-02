import styled from "styled-components";

import { TModalVariant } from "./interface";

export const BaseStyledBackdrop = styled.div<TModalVariant>`
    position: fixed;
    top: 0;
    right: 0; 
    bottom: 0;
    left: 0;
    background-color: rgb(38, 33, 31, 0.8);
    z-index: 10;

    display: ${props => props.is_visible ? "flex" : "none"};
    align-items: center;
    justify-content: center;
`;

export const BaseStyledModal = styled.div`
    /*Layout*/
    display: inline-flex;
    padding: 1.6rem;
    flex-direction: column;
    align-items: center;
    gap: 20px; 

    /*Style*/
    border-radius: 3rem;
    background: ${props => props.theme.COLORS.WHITE_100};
`;