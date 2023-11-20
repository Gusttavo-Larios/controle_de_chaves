import { useMenu } from "app/hooks/menu/hook.menu"

import { Backdrop } from "app/components/Backdrop"
import { Button } from "app/components/Button"

import { BaseStyledMenuContainer, BaseStyledMenuLink } from './styled'

import CloseIcon from "app/assets/close.svg";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export function Menu(): JSX.Element {
    const navigate = useNavigate()

    const { isVisible, closeMenu } = useMenu()

    const server: ServerEntity = JSON.parse(sessionStorage.getItem('@server') as string)

    function logout() {
        if (isVisible) closeMenu()
        navigate("/")
    }

    return <Backdrop isVisible={isVisible}>
        <BaseStyledMenuContainer>
            <button type="button" style={{ backgroundColor: "transparent", marginBottom: "2rem" }} onClick={closeMenu}>
                <img src={CloseIcon} />
            </button>
            <MenuLink to="/chaves">Chaves</MenuLink>
            {
                server.role?.role === "Administrador" &&
                <MenuLink to="/administrativo">Administrativo</MenuLink>
            }
            <Button type="button" style={{
                fontSize: "2.2rem",
                marginTop: "2rem"
            }} variant="RED_100" onClick={logout}>
                Sair
            </Button>
        </BaseStyledMenuContainer>
    </Backdrop>
}

type IMenuLinkProps = {
    to: string;
    children: ReactNode
}

function MenuLink(props: IMenuLinkProps): JSX.Element {
    const { closeMenu } = useMenu()
    return <BaseStyledMenuLink {...props} onClick={closeMenu} />
}