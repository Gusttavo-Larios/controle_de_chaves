import {  } from 'react';

import { Container, Header, BoxContent, Description, Submit, Title, BoxResult, Text, Badge, available, unavailable, Footer} from './styles';
import { ThemeProvider } from 'styled-components';

import Logo from './assets/logo_small.svg';
import Close  from './assets/close.svg';
 
function keyDetails(){
    return(
        <Container>
            <Header>
                <img className='Logo' src={Logo} alt=""/>
                <img className='Close' src={Close} alt=""/>
            </Header>
            <BoxContent>
                <Title>
                    Chave #SL001
                </Title>
                <ThemeProvider theme={available}>
                    <Badge>Disponível</Badge>
                </ThemeProvider>
            </BoxContent>

            <BoxResult>
                <Text>Cléber Feitosa</Text>
                <Description>Retirada: 06/09/2023 ás 19:00</Description>
                <Description>Devolução: 06/09/2023 ás 22:30</Description>
            </BoxResult>
            <BoxResult>
                <Text>Cléber Feitosa</Text>
                <Description>Retirada: 06/09/2023 ás 19:00</Description>
                <Description>Devolução: 06/09/2023 ás 22:30</Description>
            </BoxResult>
            <BoxResult>
                <Text>Cléber Feitosa</Text>
                <Description>Retirada: 06/09/2023 ás 19:00</Description>
                <Description>Devolução: 06/09/2023 ás 22:30</Description>
            </BoxResult>
            
            <Footer>
                <Submit>
                    Retirar chave
                </Submit>
            </Footer>
        </Container>
    );
}

export default keyDetails;