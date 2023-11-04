import styled, { keyframes } from "styled-components"
import { NavLink } from "react-router-dom"

const expandedKeyframes = keyframes`
    from {
        width: 0;
    }

    to {
        width: 38.4rem;
    }
`;

const createKeyframes = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

export const BaseStyledMenuContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.4rem;

    height: 100%;
    padding: 1.8rem; 

    background-color: ${props => props.theme.COLORS.WHITE_100};

    animation: ${expandedKeyframes} 1.5s forwards;

    * {
        animation: ${createKeyframes} 3s forwards;
    }
`;

export const BaseStyledMenuLink = styled(NavLink)`
    ${props => props.theme.TEXTS.TEXT_SMALL}
    font-size: 2.2rem;

    &:link, &:visited {
        text-decoration: none;
    }

    &:hover {
        color: ${props => props.theme.COLORS.GRAY_500}
    }
`;