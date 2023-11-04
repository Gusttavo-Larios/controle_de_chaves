import { ReactNode } from "react";

import { useMenu } from "app/hooks/menu/hook.menu";

import { Menu } from "app/layout/internal/Menu"
import { Title } from "app/components/Title";

import { Container, Header } from "./styles";

import Logo from "app/assets/logo_small.svg";
import MenuIcon from "app/assets/menu.svg";


type IProps = {
    children: ReactNode,
    title?: string
}

export function Body({ children, title }: IProps) {
    const { openMenu } = useMenu()

    return <Container>
        <Header>
            <img className="Logo" src={Logo} alt="" />
            <button type="button" style={{ backgroundColor: "transparent" }} onClick={openMenu}>
                <img className="Menu" src={MenuIcon} alt="" />
            </button>
        </Header>

        {title && <Title.H1 style={{
            marginTop: '4.8rem',
            marginBottom: "3.6rem"
        }}>{title}</Title.H1>}

        {children}
        <Menu />
    </Container>
}