import { ServerEntity } from "app/core/entities/entity.server.ts"

import { Button } from 'app/components/Button';
import { Text } from 'app/components/Text';

import { ResultBox } from './styled';

export function PublicAgentCard({ name, identification_number, email }: ServerEntity): JSX.Element {
    return <ResultBox>
        <Text style={{ fontWeight: 'bold' }} variant="TEXT_LARGE">{name}</Text>
        <Text variant="TEXT_SMALL">Identificação: {identification_number}</Text>
        <Text variant="TEXT_SMALL">E-mail: {email}</Text>
        <Button type="submit" variant="RED_100" style={{
            // width: "100%",
            marginTop: "1rem"
        }}>
            Desativar servidor
        </Button>
    </ResultBox>
}