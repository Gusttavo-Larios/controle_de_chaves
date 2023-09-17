import { Container, Header, Results, ResultBox, ResultLabel } from './styles';

import Logo from 'app/assets/logo_small.svg';
import Menu from 'app/assets/menu.svg';

import { Form } from 'app/components/FormGroup';
import { Button } from 'app/components/Button';
import { Label } from 'app/components/Label';
import { Input } from 'app/components/Input';

function main(){
    return(
        <Container>
            <Header>
                <img className='Logo' src={Logo} alt=""/>
                <img className='Menu' src={Menu} alt=""/>
            </Header>
            
            <Form  style={{ width: '90%', marginTop: '3rem'}}>
                <Label style={{ fontSize: '22px', marginTop: '2rem', textAlign: 'center', marginBottom: '2rem'}}>ChaveReservada</Label>
                <Form.Groups>
                    <Form.Group style={{ width: '100%'}}>
                        <Input type="text" placeholder="Ex: SL001" style={{ width: '100%'}}/>
                    </Form.Group>
                </Form.Groups>
                <Button type="submit" style={{ marginTop: "1rem" }}>
                    Buscar chave
                </Button>
            </Form>

            <Results>
                <Label style={{ textAlign: 'right', fontSize: '22px' }}>Chaves encontradas</Label>
                <ResultBox>
                    <ResultLabel>
                        <Label style={{ fontSize: '20px'}}>#SL001</Label>
                        <Button type="button">Disponível</Button>
                    </ResultLabel>
                </ResultBox>
                <ResultBox>
                    <ResultLabel>
                        <Label style={{ fontSize: '20px'}}>#SL002</Label>
                        <Button type="button" variant="YELLOW_400">Indisponível</Button>
                    </ResultLabel>
                </ResultBox>
                <ResultBox>
                    <ResultLabel>
                        <Label style={{ fontSize: '20px'}}>#SL003</Label>
                        <Button type="button">Disponível</Button>
                    </ResultLabel>
                </ResultBox>                
            </Results>
        </Container>
    );
}

export default main;