import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { IConsultPublicAgentForm, admServerFormRules } from "./form_validator"

import { userAdmServer } from "./hook"

import { Body } from 'app/layout/internal/Body';

import { Form } from 'app/components/FormGroup';
import { Button } from 'app/components/Button';
import { Text } from 'app/components/Text';
import { Title } from 'app/components/Title';
import { Input } from 'app/components/Input';

import { ServerCard } from "./components/ServerCard"
import { ButtonAddPublicAgent } from "./components/ButtonAddPublicAgent"

import { ContainerCards, Results, Footer } from './styles';

import Logo from 'app/assets/logo_small.svg';
import Menu from 'app/assets/menu.svg';
import Plus from 'app/assets/plus.svg';

function mainAdmServers() {
    const {
        serversList,
        onSubmit,
        enableServer,
        disableServer
    } = userAdmServer()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IConsultPublicAgentForm>({
        resolver: zodResolver(admServerFormRules),
    });

    return (
        <Body.Internal title="Servidores">
            <Form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
                <Form.Groups>
                    <Form.Group style={{ width: '100%' }}>
                        <Input type="text" placeholder="Ex: Nome" style={{ width: '100%' }} {...register("server_name")} />
                    </Form.Group>
                </Form.Groups>
                <Button type="submit" style={{ marginTop: "1rem" }}>
                    Buscar servidor
                </Button>
            </Form>

            <div style={{
                width: "100%",

                marginTop: "5.6rem",
                marginBottom: "1.4rem",

                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Title.H2>Servidores encontrados</Title.H2>
                {/* <Button type="button" variant="GREEN_400">
                    Adicionar Servidor
                    <img src={Plus} alt="Ícone de somar." />
                </Button> */}
            </div>
            <ContainerCards>
                {serversList.map((item) =>
                    <ServerCard
                        key={item.id}
                        enableServer={enableServer}
                        disableServer={disableServer}
                        {...item}
                    />
                )
                }
            </ContainerCards>
        </Body.Internal>
    );
}

export default mainAdmServers;