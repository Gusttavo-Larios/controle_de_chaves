import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 5.6rem;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;  
`;

export const Header = styled.header`
    position: fixed;
    top: 0;
    margin-top: 1rem;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Results = styled.div`
    width: 90%;
    margin-top: 3rem;    
`;

export const ResultBox = styled.div`
    width: 100%; 
    display: flex;     
    background-color: #EDEDED;
    border-radius: 20px;
    height: 16rem;
    margin-top: 1rem;    
    flex-direction: column;
    align-items: center;
`;

export const ResultLabel = styled.span`
    width: 90%;
    display: flex;
    margin-top: 1.5rem;    
    flex-direction: column;
`;

export const KeyStatus = styled.div`
    margin-top: 3rem;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    width: 90%;    
`;