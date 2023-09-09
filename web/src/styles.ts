import styled from 'styled-components';

export const Container = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: row;    
    align-items: center;
    flex-direction: column;
`;

//justify-content: center;

export const Header = styled.header`
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1200px) {
        width: 90%;
    }

`;

export const BoxContent = styled.div`    
    width: 40%;
    margin: 30px;

    @media (max-width: 1200px) {
        width: 90%;
    }

`;

export const Label = styled.span`
    font-family: arial;
    font-weight: bold;
    margin-bottom: 5px;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
`;

export const Input = styled.input`
    width: 100%;
    height: 44px;
    border: 1px solid;
    border-radius: 16px;
    padding: 8px 12px 8px 12px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    margin-bottom: 10px;
`;

export const Submit = styled.button`
    background-color: #1B97F8;
    padding: 12px 16px 12px 16px;
    width: 100%;
    height: 44px;
    border: 0;
    border-radius: 16px;
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
`;

export const Title = styled.h1`
    font-family: arial;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Description = styled.span`
    display: flex;
    font-family: arial;
    font-size: 16px;
    margin-bottom: 30px;
`;