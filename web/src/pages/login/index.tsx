import { Container, Header, BoxContent, Label, Input, Submit } from './styles';

import LogoMobile from 'app/assets/logo_large.svg';

function Login(){
    return(
        <Container>
            <Header>
                <img className='LogoMobile' src={LogoMobile} alt=""/>
            </Header>
            <BoxContent>
                <Label>E-mail</Label>
                <Input></Input>
                <Label>Senha</Label>
                <Input></Input>
                <Submit>Realizar Login</Submit>
            </BoxContent>
        </Container>
    );
}

export default Login;