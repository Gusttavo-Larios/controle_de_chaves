import { KeyEntity } from "app/core/entities/entity.key";

import { useKey } from './hook'

import { Label } from 'app/components/Label';
import { Badge } from 'app/components/Badge';
import { Button } from 'app/components/Button';

import { ResultBox, ResultLabel, ResultBtn } from './styles';

const badgeColors = [
    { variant: "BLUE_300", status: "Disponível" },
    { variant: "YELLOW_400", status: "Indisponível" },
    { variant: "RED_100", status: "Desativada" },
]

type IProps = {
    disableKey(id: KeyEntity[id]);
    enableKey(id: KeyEntity[id]);
}

export function Key(props: KeyEntity & IProps): JSX.Element {

    const badgeVariant = badgeColors.find(item => item.status === props.status)?.variant

    return <ResultBox>
        <ResultLabel>
            <Label style={{ fontSize: '20px' }}>{props.room_name}</Label>
            <Badge
                type="button"
                variant={badgeVariant ?? 'GRAY_300'}
            >
                {props.status}
            </Badge>
        </ResultLabel>
        <ResultBtn>
            {props.status === "Desativada" ?
                <Button type="button" variant="BLUE_300" onClick={() => props.enableKey(props.id)}>
                    Ativar chave
                </Button>
                :
                <Button type="button" variant="RED_100" onClick={() => props.disableKey(props.id)}>
                    Desativar chave
                </Button>
            }
        </ResultBtn>
    </ResultBox>
}