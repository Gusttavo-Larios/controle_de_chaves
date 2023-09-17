import { Container, Header } from './styles';

import Logo from 'app/assets/logo_small.svg';
import Close  from 'app/assets/close.svg';

import { Form } from 'app/components/FormGroup';
import { Button } from 'app/components/Button';
import { Label } from 'app/components/Label';
import { Input } from 'app/components/Input';

function RegisterComplete(){
    return(
        <Container>
            <Header>
                <img className='Logo' src={Logo} alt=""/>
                <img className='Close' src={Close} alt=""/>
            </Header>
            <Form  style={{ width: '90%', marginTop: '3rem'}}>
                <Label style={{ fontSize: '24px', marginTop: '2rem'}}>Completar Cadastro</Label>
                <Label style={{ fontSize: '14px', marginTop: '1rem', marginBottom: '2rem'}}>
                    Para completar o cadastro é preciso que você crie uma nova senha de acesso.
                </Label>  

                <Form.Groups>
                    <Form.Group style={{ width: '100%'}}>
                        <Label>Senha</Label>
                        <Input type="password" placeholder="******" style={{ width: '100%'}}/>
                    </Form.Group>
                    <Form.Group style={{ width: '100%'}}>
                        <Label>Confirmação de senha</Label>
                        <Input type="password" placeholder="******" style={{ width: '100%'}}/>
                    </Form.Group>
                </Form.Groups>
                <Button type="submit" style={{ marginTop: "4rem" }}>
                    Completar cadastro
                </Button>
            </Form>
        </Container>
    );
}

export default RegisterComplete;