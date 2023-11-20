import { Body } from "app/layout/internal/Body"

import { Title } from 'app/components/Title';
import { Badge } from 'app/components/Badge';
import { Button } from 'app/components/Button';
import { Flex } from "app/components/Flex";

import { HistoryItem } from "./components/HistoryItem";
import { useKeyDetails } from "./hook";

function keyDetails() {
    const { key } = useKeyDetails()
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

                    <Badge variant={key?.key_status?.status === "Disponível" ? 'GREEN_300' : 'YELLOW_400'} style={{ borderRadius: "2.5rem" }}>
                        {key?.key_status?.status}
                    </Badge>
                </Flex.Row>

                <Button type="submit">
                    Retirar chave
                </Button>
            </Flex.Row>

            <Flex.Column style={{ width: "100%", marginTop: "2.4rem", gap: "1rem" }}>
                {key?.historics?.map(item => <HistoryItem {...item} />)}
            </Flex.Column>
        </Body.Internal>
    );
}

export default keyDetails;