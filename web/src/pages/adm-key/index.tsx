import { Container, Header, Footer, Results, ResultBox, ResultLabel, ResultBtn } from './styles';

import Logo from 'app/assets/logo_small.svg';
import Menu from 'app/assets/menu.svg';
import Plus from 'app/assets/plus.svg';
 
import { Form } from 'app/components/FormGroup';
import { Button } from 'app/components/Button';
import { Label } from 'app/components/Label';
import { Input } from 'app/components/Input';

function mainAdmKeys(){
    return(
        <Container>
            <Header>
                <img className='Logo' src={Logo} alt=""/>
                <img className='Menu' src={Menu} alt=""/>
            </Header>
            
            <Form  style={{ width: '90%', marginTop: '1rem'}}>
                <Label style={{ fontSize: '22px', marginTop: '2rem', textAlign: 'center', marginBottom: '2rem'}}>Chaves</Label>
                <Form.Groups>
                    <Form.Group style={{ width: '100%'}}>
                        <Input type="text" placeholder="Ex: SL001" style={{ width: '100%'}}/>
                    </Form.Group>
                </Form.Groups>
                {/* <Button type="submit" style={{ marginTop: "1rem" }}>
                    Buscar chave
                </Button> */}
            </Form>

            <Results>
                <Label style={{ textAlign: 'right', fontSize: '22px' }}>Chaves encontradas</Label>
                <ResultBox>
                    <ResultLabel>
                        <Label style={{ fontSize: '20px'}}>#SL001</Label>
                        <Button type="button">Disponível</Button>                        
                    </ResultLabel>
                    <ResultBtn>
                        <Button type="submit" variant="RED_100" style={{ width: '15rem', marginLeft: '0rem' }}>
                            Desativar chave
                        </Button>
                    </ResultBtn>
                </ResultBox>
                <ResultBox>
                    <ResultLabel>
                        <Label style={{ fontSize: '20px'}}>#SL002</Label>
                        <Button type="button" variant="YELLOW_400">Indisponível</Button>                        
                    </ResultLabel>
                    <ResultBtn>
                        <Button type="submit" variant="RED_100" style={{ width: '15rem', marginLeft: '0rem' }}>
                            Desativar chave
                        </Button>
                    </ResultBtn>
                </ResultBox>
                <ResultBox>
                    <ResultLabel>
                        <Label style={{ fontSize: '20px'}}>#SL003</Label>
                        <Button type="button">Disponível</Button>                        
                    </ResultLabel>
                    <ResultBtn>
                        <Button type="submit" variant="RED_100" style={{ width: '15rem', marginLeft: '0rem' }}>
                            Desativar chave
                        </Button>
                    </ResultBtn>
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

export default mainAdmKeys;