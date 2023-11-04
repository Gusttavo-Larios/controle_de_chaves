import { useMenu } from "app/hooks/menu/hook.menu"

import { Backdrop } from "app/components/Backdrop"
import { Button } from "app/components/Button"

import { BaseStyledMenuContainer, BaseStyledMenuLink } from './styled'

import CloseIcon from "app/assets/close.svg";

export function Menu(): JSX.Element {
    const { isVisible, closeMenu } = useMenu()

    return <Backdrop isVisible={isVisible}>
        <BaseStyledMenuContainer>
            <button type="button" style={{ backgroundColor: "transparent", marginBottom: "2rem" }} onClick={closeMenu}>
                <img src={CloseIcon} />
            </button>
            <BaseStyledMenuLink to="/chaves">Chaves</BaseStyledMenuLink>
            <BaseStyledMenuLink to="/administrativo">Administrativo</BaseStyledMenuLink>
            <Button type="button" style={{
                fontSize: "2.2rem",
                marginTop: "2rem"
            }} >
                Sair
            </Button>
        </BaseStyledMenuContainer>
    </Backdrop>
}