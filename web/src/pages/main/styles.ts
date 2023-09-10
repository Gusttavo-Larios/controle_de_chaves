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
    font-size: 20px;
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
`;

export const Title = styled.h1`
    font-family: arial;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
`;

export const BoxResult = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #EDEDED;
    width: 100%;
    height: 72px;
    border-radius: 20px;
    border: 0;
    margin-bottom: 20px;
    margin-top: 20px;
`;

export const Key = styled.span`
    font-family: arial;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    flex: 1;
    height: 100%;
    margin-left: 20px;    
    align-items: center;
`;

export const Badge = styled.div`
    display: flex;
    color: white;
    font-family: arial;
    font-weight: bold;
    align-items: center;
    border-radius: 16px;
    padding: 12px 16px 12px 16px;
    height: 12px;
    background-color: ${props => props.theme.background};
    margin-right: 20px;
`;

//${props => props.theme.background}

export const available = {
    background: '#1B97F8'
}
  
export const unavailable = {
    background: '#FFA959'
}