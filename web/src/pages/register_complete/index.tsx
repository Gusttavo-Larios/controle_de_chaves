import {  } from 'react';

import { Container, Header, BoxContent, Label, Input, Submit, Title, Description } from './styles';

import Logo from './assets/logo_small.svg';
import Close  from './assets/close.svg';

function RegisterComplete(){
    return(
        <Container>
            <Header>
                <img className='Logo' src={Logo} alt=""/>
                <img className='Close' src={Close} alt=""/>
            </Header>
            <BoxContent>
                <Title>
                    Completar Cadastro
                </Title>
                <Description>
                    Para completar o cadastro é preciso que você crie uma nova senha 
                    de acesso.
                </Description>  

                <Label>Senha</Label>
                <Input></Input>
                <Label>Confirmação de Senha</Label>
                <Input></Input>
                <Submit>Completar cadastro</Submit>
            </BoxContent>
        </Container>
    );
}

export default RegisterComplete;