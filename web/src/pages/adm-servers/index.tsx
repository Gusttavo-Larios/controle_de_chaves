import { Container, Header, Results, ResultBox, ResultLabel, Footer } from './styles';

import Logo from 'app/assets/logo_small.svg';
import Menu from 'app/assets/menu.svg';
import Plus from 'app/assets/plus.svg';

import { Form } from 'app/components/FormGroup';
import { Button } from 'app/components/Button';
import { Label } from 'app/components/Label';
import { Input } from 'app/components/Input';

function mainAdmServers(){
    return(
        <Container>
            <Header>
                <img className='Logo' src={Logo} alt=""/>
                <img className='Menu' src={Menu} alt=""/>
            </Header>
            
            <Form  style={{ width: '90%', marginTop: '3rem'}}>
                <Label style={{ fontSize: '22px', marginTop: '2rem', textAlign: 'center', marginBottom: '2rem'}}>Servidores</Label>
                <Form.Groups>
                    <Form.Group style={{ width: '100%'}}>
                        <Input type="text" placeholder="Ex: 10023 ou nome.sobrenome@ifmt.edu.br" style={{ width: '100%'}}/>
                    </Form.Group>
                </Form.Groups>
                <Button type="submit" style={{ marginTop: "1rem" }}>
                    Buscar servidor
                </Button>
            </Form>

            <Results>
                <Label style={{ textAlign: 'right', fontSize: '20px' }}>Servidores encontrados</Label>
                <ResultBox>
                    <ResultLabel>
                        <Label style={{ fontSize: '22px'}}>Cléber Feitosa</Label>
                        <Label style={{ fontSize: '16px'}}>Identificação: 10023</Label>
                        <Label style={{ fontSize: '16px'}}>E-mail: cleber.feitosa@ifmt.edu.br</Label>                                                
                    </ResultLabel>                    
                    <Button type="submit" variant="RED_100" style={{ width: "90%", alignItems: "center",
                 marginTop: "1rem"}}>
                        Desativar servidor
                    </Button>
                </ResultBox>
                <ResultBox>
                    <ResultLabel>
                        <Label style={{ fontSize: '22px'}}>Daniel Domingos</Label>
                        <Label style={{ fontSize: '16px'}}>Identificação: 10022</Label>
                        <Label style={{ fontSize: '16px'}}>E-mail: daniel.domingos@ifmt.edu.br</Label>                        
                    </ResultLabel>
                    <Button type="submit" variant="RED_100" style={{ width: "90%", alignItems: "center",
                 marginTop: "1rem"}}>
                        Desativar servidor
                    </Button>
                </ResultBox>                                
            </Results>
            <Footer>
                <Button type="submit" style={{ borderRadius: '28px', width: '5rem' }}>
                    <img src={Plus} alt=""/>
                </Button>                
            </Footer>
        </Container>
    );
}

export default mainAdmServers;