import { Body } from "app/layout/internal/Body"

import { Title } from 'app/components/Title';
import { Badge } from 'app/components/Badge';
import { Button } from 'app/components/Button';
import { Flex } from "app/components/Flex";

import { HistoryItem } from "./components/HistoryItem";

const list = [
    {
        publicAgentName: "Cléber Feitosa",
        dateTimeWithdrawn: "01/10/2023 ás 09:00",
        devolutionDateTime: "01/10/2023 ás 12:00"
    },
    {
        publicAgentName: "Daniel Domingues",
        dateTimeWithdrawn: "10/10/2023 ás 07:00",
        devolutionDateTime: "11/10/2023 ás 08:40"
    },
]

function keyDetails() {
    return (
        <Body.Internal>

            <Flex.Row style={{
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%"
            }}>
                <Flex.Row style={{
                    alignItems: "center",
                    gap: "1.6rem"
                }}>
                    <Title.H1>
                        Chave #SL001
                    </Title.H1>

                    <Badge variant="GREEN_300" style={{ borderRadius: "2.5rem" }}>
                        Disponível
                    </Badge>
                </Flex.Row>

                <Button type="submit">
                    Retirar chave
                </Button>
            </Flex.Row>

            <Flex.Column style={{ width: "100%", marginTop: "2.4rem", gap: "1rem" }}>
                {list.map(item => <HistoryItem {...item} />)}
            </Flex.Column>
        </Body.Internal>
    );
}

export default keyDetails;