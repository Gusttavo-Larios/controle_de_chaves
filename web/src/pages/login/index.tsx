import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginFormRules, IAuthenticateForm } from "./form_validator";

import { LoginUseCaseImpl } from "app/application/use_case_impl/use_case_impl.login";

import { useLogin } from "./hook"

import { Container, Header } from "./styles";
import { Content } from "app/layout/internal/Body/styles";

import LogoMobile from "app/assets/logo_large.svg";

import { Label } from "app/components/Label";
import { Form } from "app/components/FormGroup";
import { Input } from "app/components/Input";
import { Button } from "app/components/Button";

function Login() {
  const { onSubmit } = useLogin()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IAuthenticateForm>({
    resolver: zodResolver(loginFormRules),
  });

  return (
    <Container>
      <Header>
        <img className="LogoMobile" src={LogoMobile} alt="" />
      </Header>
      <Content>
        <Form style={{ width: "90%" }} onSubmit={handleSubmit(onSubmit)}>
          <Form.Groups>
            <Form.Group style={{ width: "100%" }}>
              <Label>E-mail</Label>
              <Input
                type="email"
                placeholder="ex: nome.sobrenome@ifmt.edu.br"
                style={{ width: "100%" }}
                {...register("email")}
              />
            </Form.Group>
            <Form.Group style={{ width: "100%" }}>
              <Label>Senha</Label>
              <Input
                type="password"
                placeholder="******"
                style={{ width: "100%" }}
                {...register("password")}
              />
            </Form.Group>
          </Form.Groups>

          <Button type="submit" style={{ marginTop: "4rem" }}>
            Realizar Login
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;
