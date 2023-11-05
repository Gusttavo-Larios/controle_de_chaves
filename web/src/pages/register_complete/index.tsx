import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRegisterComplete } from "./hook"
import { registerCompleteFormRules, IRegisterCompleteForm } from "./form_validator"

import { Body } from "app/layout/internal/Body"

import { Form } from 'app/components/FormGroup';
import { Title } from 'app/components/Title';
import { Text } from 'app/components/Text';
import { Button } from 'app/components/Button';
import { Label } from 'app/components/Label';
import { Input } from 'app/components/Input';

function RegisterComplete() {
    const {onSubmit} = useRegisterComplete()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterCompleteForm>({
        resolver: zodResolver(registerCompleteFormRules),
    })

    return (
        <Body.External>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Title.H1>Completar Cadastro</Title.H1>
                <Text variant="TEXT_SMALL" style={{ marginTop: '1rem' }}>
                    Para completar o cadastro é preciso que você crie uma nova senha de acesso.
                </Text>

                <Form.Groups style={{ marginTop: "3rem", width: "100%"}}>
                    <Form.Group style={{ width: '100%' }} >
                        <Label>Senha</Label>
                        <Input type="password" placeholder="******" style={{ width: '100%' }} {...register("password")} />
                        {/* {errors?.password?.message} */}
                    </Form.Group>
                    <Form.Group style={{ width: '100%' }} >
                        <Label>Confirmação de senha</Label>
                        <Input type="password" placeholder="******" style={{ width: '100%' }} {...register("confirmationPassword")} />
                    </Form.Group>
                </Form.Groups>
                <Button type="submit" style={{ marginTop: "4rem" }}>
                    Completar cadastro
                </Button>
            </Form>
        </Body.External>
    );
}

export default RegisterComplete;