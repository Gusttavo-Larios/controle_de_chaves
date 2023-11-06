import { Text } from "app/components/Text"

import { ResultBox } from "./styled";

type IProps = {
    publicAgentName: string;
    dateTimeWithdrawn: string;
    devolutionDateTime: string;
}

export function HistoryItem(props: IProps): JSX.Element {
    return <ResultBox>
        <Text variant="TEXT_LARGE" style={{ fontWeight: 'bold' }} >{props.publicAgentName}</Text>
        <Text variant="TEXT_SMALL" >Retirada: {props.dateTimeWithdrawn}</Text>
        <Text variant="TEXT_SMALL" >Devolução: {props.devolutionDateTime}</Text>
    </ResultBox>
}