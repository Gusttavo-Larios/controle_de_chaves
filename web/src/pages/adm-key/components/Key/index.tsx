import { KeyEntity, KeyStatusEntity } from "app/core/entities/entity.key";

import { Label } from 'app/components/Label';
import { Badge } from 'app/components/Badge';
import { Button } from 'app/components/Button';

import { ResultBox, ResultLabel, ResultBtn } from './styles';
import { BaseStyledBadgeProps } from "app/components/Badge/interface";

const badgeColors: Array<{ variant: BaseStyledBadgeProps['variant'], status: KeyStatusEntity['status'] }> = [
    { variant: "BLUE_300", status: "Disponível" },
    { variant: "YELLOW_400", status: "Indisponível" },
    { variant: "RED_100", status: "Desativada" },
]

type IProps = {
    disableKey(id: KeyEntity['id']): Promise<void>;
    enableKey(id: KeyEntity['id']): Promise<void>;
}

export function Key(props: KeyEntity & IProps): JSX.Element {

    const badgeVariant = badgeColors.find(item => item.status === props.key_status?.status)?.variant

    return <ResultBox>
        <ResultLabel>
            <Label style={{ fontSize: '20px' }}>{props.room_name}</Label>
            <Badge
                variant={badgeVariant ?? 'GRAY_300'}
            >
                {props.key_status?.status}
            </Badge>
        </ResultLabel>
        <ResultBtn>
            {props.key_status?.status === "Desativada" ?
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