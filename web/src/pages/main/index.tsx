import {  } from 'react';

import { Container, Header, BoxContent, Label, Input, Submit, Title, BoxResult, Key, Badge, available, unavailable } from './styles';
import { ThemeProvider } from 'styled-components';

import Logo from './assets/logo_small.svg';
import Menu  from './assets/menu.svg';

function main(){
    return(
        <Container>
            <Header>
                <img className='Logo' src={Logo} alt=""/>
                <img className='Menu' src={Menu} alt=""/>
            </Header>
            <BoxContent>
                <Title>
                    ChaveReservada
                </Title>
                <Input placeholder='Ex: SL001'></Input>
                <Submit>Buscar chave</Submit>
            </BoxContent>
            <BoxContent>
                <Label>Chaves encontradas</Label>
                <ThemeProvider theme={available}>
                    <BoxResult>
                        <Key>#SL001</Key>
                        <Badge>Disponível</Badge>
                    </BoxResult>
                </ThemeProvider>

                <ThemeProvider theme={unavailable}>
                    <BoxResult>
                        <Key>#SL002</Key>
                        <Badge>Indisponível</Badge>
                    </BoxResult>
                </ThemeProvider>

                <ThemeProvider theme={available}>
                    <BoxResult>
                        <Key>#SL003</Key>
                        <Badge>Disponível</Badge>
                    </BoxResult>
                </ThemeProvider>
            </BoxContent>
        </Container>
    );
}

export default main;