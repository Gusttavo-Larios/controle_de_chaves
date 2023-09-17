import { Container, Header, Footer, Results, ResultBox, ResultLabel, KeyStatus } from './styles';

import Logo from 'app/assets/logo_small.svg';
import Close from 'app/assets/close.svg';
 
import { Button } from 'app/components/Button';
import { Label } from 'app/components/Label';


function keyDetails(){
    return(
        <Container>
            <Header>
                <img className='Logo' src={Logo} alt=""/>
                <img className='Close' src={Close} alt=""/>
            </Header>
            
            <KeyStatus>
                <Label style={{ fontSize: '24px' }}>Chave #SL001</Label>
                <Button type="submit">
                    Disponível
                </Button>
            </KeyStatus>

            <Results>
                <Label style={{ textAlign: 'right', fontSize: '22px' }}>Chaves encontradas</Label>
                <ResultBox>
                    <ResultLabel>
                        <Label style={{ fontSize: '22px'}}>Cléber Feitosa</Label>
                        <Label style={{ fontSize: '16px'}}>Retirada: 06/09/2023 ás 19:00</Label>
                        <Label style={{ fontSize: '16px'}}>Devolução: 06/09/2023 ás 22:30</Label>                        
                    </ResultLabel>
                </ResultBox>
                <ResultBox>
                    <ResultLabel>
                        <Label style={{ fontSize: '22px'}}>Cléber Feitosa</Label>
                        <Label style={{ fontSize: '16px'}}>Retirada: 05/09/2023 ás 19:00</Label>
                        <Label style={{ fontSize: '16px'}}>Devolução: 06/09/2023 ás 22:30</Label>                        
                    </ResultLabel>
                </ResultBox>
                <ResultBox>
                    <ResultLabel>
                        <Label style={{ fontSize: '22px'}}>Cléber Feitosa</Label>
                        <Label style={{ fontSize: '16px'}}>Retirada: 06/09/2023 ás 19:00</Label>
                        <Label style={{ fontSize: '16px'}}>Devolução: 06/09/2023 ás 22:30</Label>                        
                    </ResultLabel>
                </ResultBox>
            </Results>

            <Footer>
                <Button type="submit" style={{ width: '100%' }}>
                    Retirar chave
                </Button>
            </Footer>

        </Container>
    );
}

export default keyDetails;