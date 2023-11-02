import { useContext } from "react";

import { AlertContext } from "app/contexts/modal/context.modal";

import { Modal } from "../Modal";
import { Title } from "../Title";
import { Text } from "../Text";
import { Button } from "../Button";

export function Alert() {
    const { data, closeAlert } = useContext(AlertContext)

    const is_visible = data.title !== ""

    return <Modal is_visible={is_visible}>
        <Title.H2>
            {data.title}
        </Title.H2>
        <Text variant="TEXT_SMALL">
            {data.message}
        </Text>
        <Button style={{width: "100%"}} type="button" variant="BLUE_300" onClick={closeAlert}>
            Ok
        </Button>
    </Modal>
}