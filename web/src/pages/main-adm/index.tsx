import { Container, Header, Area, BoxImg } from './styles';

import Logo from 'app/assets/logo_small.svg';
import Menu from 'app/assets/menu.svg';
import User from 'app/assets/user.svg';
import Key from 'app/assets/key.svg';
 
import { Button } from 'app/components/Button';
import { Label } from 'app/components/Label';

function mainAdm(){
    return(
        <Container>
            <Header>
                <img className='Logo' src={Logo} alt=""/>
                <img className='Menu' src={Menu} alt=""/>
            </Header>
            <Label style={{ fontSize: '24px', marginTop: '5rem' }}>ChaveReservada</Label>
            <Area>
                <Button type="submit" style={{ height: '140px', width: '48%' }}>
                    <img src={User} alt="" />
                </Button>
                <Button type="submit" style={{ height: '140px', width: '48%' }}>
                    <img src={Key} alt="" />
                </Button>
            </Area>
        </Container>
    );
}

export default mainAdm;