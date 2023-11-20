import styled from 'styled-components';

export const Results = styled.div`
    width: 90%;
    margin-top: 3rem;    
`;

export const ResultBox = styled.div`
    width: 100%;
    display: flex;
    background-color: #EDEDED;
    border-radius: 20px;
    height: 10rem;
    margin-top: 1rem;
`;

export const ResultLabel = styled.span`
    width: 100%;
    display: flex;
    margin-left: 2rem;
    margin-right: 2rem;
    align-items: center;
    flex-direction: row;
    justify-content: space-between; 
    cursor: pointer;
    
    &:hover {
        opacity: 0.6;
    }
`;