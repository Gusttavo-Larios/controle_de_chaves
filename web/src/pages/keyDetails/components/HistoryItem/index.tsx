import { Text } from "app/components/Text"

import { ResultBox } from "./styled";
import { HistoricEntity } from "app/core/entities/entity.historic";


export function HistoryItem(props: HistoricEntity): JSX.Element {
    return <ResultBox>
        <Text variant="TEXT_LARGE" style={{ fontWeight: 'bold' }} >{props.server.name}</Text>
        <Text variant="TEXT_SMALL" >Retirada: {`${props.withdrawal_at}`}</Text>
        <Text variant="TEXT_SMALL" >Devolução: {`${props.returned_at ?? "Chave não devolvida"}`}</Text>
    </ResultBox>
}