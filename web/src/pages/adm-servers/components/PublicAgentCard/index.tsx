import { PublicAgentEntity } from "app/core/entities/entity.public_agent.ts"

import { Button } from 'app/components/Button';
import { Text } from 'app/components/Text';

import { ResultBox } from './styled';

export function PublicAgentCard({ name, identificationNumber, email }: PublicAgentEntity): JSX.Element {
    return <ResultBox>
        <Text style={{ fontWeight: 'bold' }} variant="TEXT_LARGE">{name}</Text>
        <Text variant="TEXT_SMALL">Identificação: {identificationNumber}</Text>
        <Text variant="TEXT_SMALL">E-mail: {email}</Text>
        <Button type="submit" variant="RED_100" style={{
            width: "100%",
            marginTop: "1rem"
        }}>
            Desativar servidor
        </Button>
    </ResultBox>
}