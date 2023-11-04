import { useNavigate } from 'react-router-dom';

import { Area, BaseStyledAdministrationOption } from './styles';


import User from 'app/assets/user.svg';
import Key from 'app/assets/key.svg';

import { Body } from 'app/layout/internal/Body';
import { Text } from 'app/components/Text';

function mainAdm() {
    const navigate = useNavigate()

    return (
        <Body title='Administrativo'>
            <Area>
                <BaseStyledAdministrationOption type="button" onClick={() => navigate("/administrativo/servidores")} >
                    <img src={User} alt="Imagem do contorno de uma pessoa" />
                    <Text type="TEXT_SMALL">Servidores</Text>
                </BaseStyledAdministrationOption>
                <BaseStyledAdministrationOption type="button" onClick={() => navigate("/administrativo/chaves")} >
                    <img src={Key} alt="Imagem do contorno de uma chave" />
                    <Text type="TEXT_SMALL">Chaves</Text>
                </BaseStyledAdministrationOption>
            </Area>
        </Body>
    );
}

export default mainAdm;