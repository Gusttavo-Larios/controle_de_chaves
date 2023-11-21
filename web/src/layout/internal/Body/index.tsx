import { ReactNode } from "react";
import { useNavigate } from "react-router-dom"

import { useMenu } from "app/hooks/menu/hook.menu";

import { Menu } from "app/layout/internal/Menu"
import { Title } from "app/components/Title";

import { Container, Content, Header } from "./styles";

import Logo from "app/assets/logo_small.svg";
import MenuIcon from "app/assets/menu.svg";
import CloseIcon from "app/assets/close.svg";

export function Body() { }

type ICommonProps = {
    children: ReactNode,
}

type IInternalProps = {
    title?: string;
}

function Internal({ children, title }: ICommonProps & IInternalProps): JSX.Element {
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

        <Content>
            {children}
        </Content>
        <Menu />
    </Container>
}

function External({ children }: ICommonProps): JSX.Element {
    const navigate = useNavigate()

    return <Container>
        <Header>
            <img className="Logo" src={Logo} alt="" />
            <button type="button" style={{ backgroundColor: "transparent" }} onClick={() => navigate(-1)}>
                <img className="Menu" src={CloseIcon} alt="" />
            </button>
        </Header>

        <Content>
            {children}
        </Content>
    </Container>
}

Body.Internal = Internal

Body.External = External