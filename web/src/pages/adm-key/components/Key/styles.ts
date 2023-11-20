import styled from 'styled-components';

export const ResultBox = styled.div`
    width: 100%;
    display: flex;
    background-color: #EDEDED;
    border-radius: 20px;
    height: 13rem;
    margin-top: 1rem;
    flex-direction: column;
    align-items: center;
`;

export const ResultLabel = styled.span`
    width: 95%;
    display: flex;
    margin-top: 1.5rem; 
    margin-bottom: 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;    
`;

export const ResultBtn = styled.div`
    display: flex;
    width: 95%;
    justify-content: flex-start;
`;