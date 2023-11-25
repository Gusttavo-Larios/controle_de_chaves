import { ServerEntity } from "app/core/entities/entity.server.ts"

import { Button } from 'app/components/Button';
import { Text } from 'app/components/Text';

import { ResultBox } from './styled';

type IProps = {
    disableServer(id: ServerEntity['id']): Promise<void>;
    enableServer(id: ServerEntity['id']): Promise<void>;
}

export function ServerCard({
    name,
    identification_number,
    email,
    ...rest
}: ServerEntity & IProps): JSX.Element {
    return <ResultBox>
        <Text style={{ fontWeight: 'bold' }} variant="TEXT_LARGE">{name}</Text>
        <Text variant="TEXT_SMALL">Identificação: {identification_number}</Text>
        <Text variant="TEXT_SMALL"
            style={{
                marginBottom: "1rem"
            }}
        >E-mail: {email}</Text>
        {/* <Button type="submit" variant="RED_100" style={{
            // width: "100%",
            marginTop: "1rem"
        }}>
            Desativar servidor
        </Button> */}

        {rest.server_status?.status === "Desativado" ?
            <Button type="button" variant="BLUE_300" onClick={() => rest.enableServer(rest.id)}>
                Ativar servidor
            </Button>
            :
            <Button type="button" variant="RED_100" onClick={() => rest.disableServer(rest.id)}>
                Desativar servidor
            </Button>
        }
    </ResultBox>
}