import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 1rem;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;  
`;

export const Header = styled.header`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Results = styled.div`
    width: 90%;
    margin-top: 3rem;    
    margin-bottom: 3rem;    
`;

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

export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    width: 90%;    
`;