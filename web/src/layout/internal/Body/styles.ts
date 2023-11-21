import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;  
  
  padding: 5.6rem 4rem;

  position: relative;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;  

  position: relative;

  @media (min-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1366px) {
    width: 50%;
  }
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 4.8rem;
`;